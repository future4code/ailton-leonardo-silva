import { connection } from "./BaseDatabase"

const deleteUser = async (id: string) => {
    await connection("labecommerce_users")
        .where("id", id)
        .delete()
}

export default deleteUser