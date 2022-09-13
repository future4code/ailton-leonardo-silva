import * as jwt from "jsonwebtoken";
import User from "../model/User";
import BaseDataBase from "./BaseDataBase";
import Authenticator from "../services/Authenticator";

class UserData extends BaseDataBase {
  async insertUser(user: User): Promise<void> {
    await this.getConnection()
      .insert({
        id: user.getUserId(),
        email: user.getEmail(),
        password: user.getPassword(),
      })
      .into("User_Introducao_Autenticacao");
  }

  async selectUsers() {
    const result = await this.getConnection()
      .select("*")
      .from("User_Introducao_Autenticacao");
    return result;
  }

  async selectUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("User_Introducao_Autenticacao")
      .where({ email });

    return result[0];
  }

  async fetchUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("User_Introducao_Autenticacao")
      .where({ id });

    return result[0];
  }

  async fetchUserData(token: string): Promise<Authenticator> {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = {
      id: payload.id,
    };
    return result as any;
  }
}

export default UserData;
