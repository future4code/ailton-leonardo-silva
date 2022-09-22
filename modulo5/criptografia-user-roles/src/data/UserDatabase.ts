import User from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    public async createUser(user: User): Promise<string> {
        await this.getConnection().insert({
            id: user.getId(),
            name: user.getName(),
            nickname: user.getNickName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role:user.getRole()
        }).into("to_do_list_users")

        return `Usuario ${user.getName()} cadastrado com sucesso`
    }

    public async edit(id: string, nickname: string) {
        await this.getConnection().update({ nickname }).into("to_do_list_users").where({ id })
    }

    public async getUserByEmail(email: string): Promise<User|undefined> {
        const result = await this.getConnection()
            .select("*")
            .from("to_do_list_users")
            .where({ email: email })

        if(!result.length){
            return undefined
        }
        
        return new User(result[0].id, result[0].name, result[0].nickname, result[0].email, result[0].password,result[0].role)
    }

    public async getUserByPassword(senha: string): Promise<User> {
        const result = await this.getConnection()
            .select("*")
            .from("to_do_list_users")
            .where({ password: senha })

        return new User(result[0].id, result[0].name, result[0].nickname, result[0].email, result[0].password,result[0].role)
    }

}
