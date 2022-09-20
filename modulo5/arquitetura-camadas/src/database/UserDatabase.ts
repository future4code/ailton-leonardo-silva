import { IUserDB, User } from "../models/User";
import BaseDatabase from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
     
  async insertUser(user: User): Promise<void|any> {
          console.log({"user" : user})
          await this.getConnection()
            .insert({
              id: user.getId(),
              name: user.getName(),
              email: user.getEmail(),
              password: user.getPassword(),
              role: user.getRole(),
            })
            .into("Arq_Users");

            return `Usuário ${user.getName()} criado com sucesso.`
          }
      
}

