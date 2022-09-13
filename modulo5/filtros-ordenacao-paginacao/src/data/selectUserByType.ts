import { connection } from "./BaseDatabase";

const selectUserByType = async (type: string): Promise<any> => {
  const result = await connection
    .select("id", "name", "email", "type")
    .from("aula48_exercicio")
    .where("type", type);

  return result;
};

export default selectUserByType;
