import { UserDatabase } from "../database/UserDatabase";
import {
  ILoginInputDTO,
  ISignupInputDTO,
  User,
  USER_ROLES,
} from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  //MÉTODO DE SIGNUP - CRIAÇÃO DE USUÁRIO
  public signup = async (input: ISignupInputDTO) => {
    const name = input.name;
    let email = input.email;
    const password = input.password;
    let role = input.role;

    //Cheque do parâmetro NAME
    if (!name) {
      throw new Error("O nome deve ser informado.");
    } else if (name.length < 3) {
      throw new Error("O seu nome deve ter mais de 3 caracteres.");
    }

    //Cheque do parâmetro PASSWORD
    if (!password) {
      throw new Error("A senha deve ser informada.");
    } else if (password.length < 6) {
      throw new Error("A sua senha deve ter mais de 6 caracteres.");
    }

    //Cheque do parâmetro EMAIL
    if (!email) {
      throw new Error("O email deve ser informado.");
    } else {
      email = email.toLowerCase();
    }
    //Validação de email por REGEX
    var emailCheck =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    if (!emailCheck.test(`${email}`)) {
      throw new Error("Email inválido.");
    }
    //Check para verificar se o email já está cadastrado no BD.
    const userDB = await this.userDatabase.findByEmail(email);
    if (userDB) {
      throw new Error("E-mail já cadastrado.");
    }

    //Check do parâmetro ROLE
    if (!role) {
      role = USER_ROLES.NORMAL;
    } else if (
      role.toUpperCase() !== USER_ROLES.ADMIN &&
      role.toUpperCase() !== USER_ROLES.NORMAL
    ) {
      throw new Error("Tipo de usuário inválido");
    }

    console.log(name, email, password, role);

    const id = this.idGenerator.generate();
    const hashedPassword = await this.hashManager.hash(password);

    const user = new User(id, name, email, hashedPassword, role);

    await this.userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    const response = {
      message: `${name} foi cadastrado(a) com sucesso.`,
      token,
    };

    return response;
  };

  public login = async (input: ILoginInputDTO) => {
    let email = input.email;
    const password = input.password;

    //Cheque do parâmetro PASSWORD
    if (!password) {
      throw new Error("A senha deve ser informada.");
    } else if (password.length < 6) {
      throw new Error("A sua senha deve ter mais de 6 caracteres.");
    }

    //Cheque do parâmetro EMAIL
    if (!email) {
      throw new Error("O email deve ser informado.");
    } else {
      email = email.toLowerCase();
    }
    //Validação de email por REGEX
    var emailCheck =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    if (!emailCheck.test(`${email}`)) {
      throw new Error("Email inválido.");
    }
    //Check para verificar se o email já está cadastrado no BD.
    const userDB = await this.userDatabase.findByEmail(email);
    if (!userDB) {
      throw new Error("E-mail não cadastrado.");
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role
    );

    const isPasswordCorrect = await this.hashManager.compare(
      password,
      user.getPassword()
    );

    if (!isPasswordCorrect) {
      throw new Error("Senha incorreta.");
    }

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    const response = {
      message: "Login realizado com sucesso",
      token,
    };

    return response;
  };
}
