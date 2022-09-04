import { connection } from "./BaseDatabase"
import { UpdateUser } from "../types"

const updateUser = async (user: UpdateUser): Promise<any> => {

    const { id , name, email , password } = user

    await connection("labecommerce_users")
        .where("id", id)
        .update({
            name,
            email,
            password
        })


}

export default updateUser