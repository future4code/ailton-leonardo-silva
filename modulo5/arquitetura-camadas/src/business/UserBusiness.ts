import { UserDatabase } from "../database/UserDatabase";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {

  //*********** MÉTODO - CRIAR UM USUÁRIO   *****************
  async createUser(name: string, email: string, password: string, role: USER_ROLES) {
    try {
      //Checagem dos dados recebidos via body pela classe de verificação
      if (!name || !email || !password || !role) {
        throw new Error("Os dados devem ser fornecidos.");
      }

      const id = new IdGenerator().generate();

      //Gerando o hash da senha
      const hashPassword = await new HashManager().hash(password);

      //Instancia a classe de banco de dados
      const userData = new UserDatabase();

      //Instancia um usuário
      const user: any = {id, name, email, password:hashPassword, role};
      
      const answer = await userData.insertUser(user)
      console.log(answer)
      const userToken = { id, role };
      const token = new Authenticator().generateToken(userToken);
      console.log(token)

      return { answer ,  token }
    } catch (error:any) {
      throw new Error ("Erro inesperado.") 
    }
  }
}
