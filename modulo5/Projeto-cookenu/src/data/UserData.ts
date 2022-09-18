import * as jwt from "jsonwebtoken";
import User from "../model/User";
import BaseDataBase from "./BaseDataBase";
import Authenticator from "../services/Authenticator";

class UserData extends BaseDataBase {
  async insertUser(user: User): Promise<void> {
    await this.getConnection()
      .insert({
        id: user.getUserId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      })
      .into("Users_Projeto_Cookenu");
  }

  async selectUsers() {
    const result = await this.getConnection()
      .select("*")
      .from("Users_Projeto_Cookenu");
    return result;
  }

  async selectUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("Users_Projeto_Cookenu")
      .where({ email });

    return result[0];
  }

  async fetchUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("Users_Projeto_Cookenu")
      .where({ id });

    return result[0];
  }

  //**********   MÉTODO PARA BUSCAR O ID E A ROLE DO USER   **********
  async fetchUserData(token: string): Promise<Authenticator> {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    
    const result = {
      id: payload.user.id,
      role: payload.user.role
    };
    
    return result as any;
  }

  //********** DELEÇÃO DE RECEITA DO BANCO DE DADOS **********
  async deleteUser(id:string): Promise<void> {
    await this.getConnection().raw(`
    DELETE FROM Users_Projeto_Cookenu WHERE id LIKE '${id}'
  `);
  }


}

export default UserData;
