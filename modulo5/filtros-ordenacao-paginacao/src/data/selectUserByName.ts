import { connection } from "./BaseDatabase";

const selectUserByName = async (name: string): Promise<any> => {
  const result = await connection
    .select("id", "name", "email", "type")
    .from("aula48_exercicio")
    .where("name", name);

  return result;
};

export default selectUserByName;
