import { IUserDB, User } from "../models/User"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labook_Users"

    //Método para criar um usuário
    public createUser = async (user: User) => {
        const userDB: IUserDB = {
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword(),
            role: user.getRole()
        }

        await this.getConnection()(UserDatabase.TABLE_USERS)
            .insert(userDB)
    }

    //Método para achar um usuário pelo seu email
    public findByEmail = async (email: string) => {
        const usersDB: IUserDB[] = await 
            this.getConnection()(UserDatabase.TABLE_USERS)
            .select()
            .where({ email })

        return usersDB[0]
    }

}