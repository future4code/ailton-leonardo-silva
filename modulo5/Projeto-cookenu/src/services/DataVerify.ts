import UserData from "../data/UserData";
import { typeUser } from "../model/User";
import { HashManager } from "./HashManager";

export class DataVerify {

  //***** MÉTODO DE VERIFICAÇÃO DE TODOS OS DADOS DA CRIAÇÃO DO USUÁRIO *****
  async dataCheck(name: string, email: string, password: string, role: typeUser) {
    //Cheque do parâmetro nome
    if (!name) {
      throw new Error("O nome deve ser informado.");
    }
    
    //Cheque do parâmetro password
    if (!password) {
      throw new Error("A senha deve ser informada.");
    } else if (password.length < 6) {
      throw new Error("A sua senha deve ter mais de 6 caracteres.");
    }

    //Check do parâmetro role
    if (!role) {
      role = typeUser.NORMAL;
    } else if (role.toUpperCase() !== typeUser.ADMIN && role.toUpperCase() !== typeUser.NORMAL) {
      throw new Error("Tipo de usuário inválido");
    }

    //Cheque do parâmetro email

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
    
    //Instancia a classe de banco de dados para saber se o email já está cadastrado.
    const emailData = await new UserData().selectUserByEmail(email)
        
    if (emailData !== undefined) {
      throw new Error ("Email já cadastrado no sistema.")
    } else {
      //Retornando os dados validados para o UserController.ts
      return { name, email, password, role };
    }
  }

  // *************** MÉTODO DE VERIFICAÇÃO DO LOGIN ***************
  async checkLogin(email: string, password: string) {
    //Cheque do parâmetro email

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

    //Cheque do parâmetro password
    if (!password) {
      throw new Error("A senha deve ser informada.");
    } else if (password.length < 6) {
      throw new Error("A sua senha deve ter mais de 6 caracteres.");
    }

    //Instancia a classe de banco de dados
    const userData = new UserData();

    const answer = await userData.selectUserByEmail(email);
    
    //Cheque para verificar se existe o email no Banco de Dados
    if (!answer) {
      throw new Error("Email não cadastrado no sistema.");
    }
    
    //Cheque de senhas
    const correctPassword = await new HashManager().compare(password, answer.password);
    
    if (!correctPassword) {
      throw new Error("Senha inválida!");
    }
    return { email , password: answer.password };
  }
}
