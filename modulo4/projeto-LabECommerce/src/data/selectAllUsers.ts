import { connection } from "./BaseDatabase";

const selectAllUsers = async () => {
  const result = await connection
    .select("*")
    .orderBy("name")
    .from("labecommerce_users");

  return result;
};

export default selectAllUsers;
