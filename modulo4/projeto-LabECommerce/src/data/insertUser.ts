import { connection } from "./BaseDatabase"
import { NewUser } from "../types"

const insertUser = async (user: NewUser): Promise<any> => {

    const { id, name, email , password } = user

    await connection
        .insert({
            id,
            name,
            password,
            email
        })
        .into("labecommerce_users")

}

export default insertUser