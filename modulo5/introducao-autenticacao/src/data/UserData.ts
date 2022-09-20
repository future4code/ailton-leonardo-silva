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
      .into("User_Autenticacao_Criptografia");
  }

  async selectUsers() {
    const result = await this.getConnection()
      .select("*")
      .from("User_Autenticacao_Criptografia");
    return result;
  }

  async selectUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("User_Autenticacao_Criptografia")
      .where({ email });

    return result[0];
  }

  async fetchUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("User_Autenticacao_Criptografia")
      .where({ id });

    return result[0];
  }

  async fetchUserData(token: string): Promise<Authenticator> {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
      role: payload.role
    };
    return result as any;
  }
}

export default UserData;
