import { connection } from "./BaseDatabase";

const selectUserById = async (id: string) => {
  const result = await connection
    .select("*")
    .from("labecommerce_users")
    .where("id", id);

  return result;
};

export default selectUserById;
