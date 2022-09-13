import { Request, Response } from "express";
import UserData from "../data/UserData";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import GenerateId from "../services/GenerateId";

class UserController {
  //***********   CRIAR UM USUÁRIO   *****************
  async createUser(req: Request, res: Response) {
    try {
      const id = new GenerateId().createId();
      const email = req.body.email.toLowerCase();
      const password = req.body.password;

      if (!email) {
        throw new Error("O email deve ser informado.");
      }

      //Validação de email
      var emailCheck =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
      if (!emailCheck.test(`${email}`)) {
        throw new Error("Email inválido.");
      }

      if (!password) {
        throw new Error("A senha deve ser informada.");
      }

      if (password.length < 6) {
        throw new Error("A sua senha deve ter mais de 6 caracteres.");
      }

      //Instancia um usuário
      const user = new User(id, email, password);

      //Instancia a classe de banco de dados
      const userData = new UserData();

      const answer = await userData.insertUser(user);

      const token = new Authenticator().generateToken(id);

      res.status(201).send({ message: answer, token });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  //***********   BUSCAR USUÁRIO POR EMAIL   *************
  async getUserByEmail(req: Request, res: Response) {
    try {
      const email: string = req.body.email.toLowerCase();
      const password: string = req.body.password;

      if (!email) {
        throw new Error("O email deve ser informado.");
      }

      if (!password) {
        throw new Error("A senha deve ser informada.");
      }

      if (password.length < 6) {
        throw new Error("A sua senha deve ter mais de 6 caracteres.");
      }

      //Validação de email
      var emailCheck =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
      if (!emailCheck.test(`${email}`)) {
        throw new Error("Email inválido.");
      }

      //Instancia a classe de banco de dados
      const userData = new UserData();

      const answer = await userData.selectUserByEmail(email);

      //Cheque de senhas

      if (password !== answer.password) {
        throw new Error("Senha inválida!");
      }

      const token = new Authenticator().generateToken(answer.id);

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  //***********   BUSCAR OS DADOS DO USUÁRIO   ****************

  async getUserData(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;
      const authenticator = new Authenticator().verifyToken(token)

      if (!authenticator) {
        throw new Error ("Usuário inválido.")
      }

      //Instancia a classe de banco de dados
      const userData = new UserData();
      const fetchingData:any = await userData.fetchUserData(token)

      const user = await userData.fetchUserById(fetchingData.id)

      res.status(200).send({id: user.id, email: user.email})

    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }
}

export default UserController;
