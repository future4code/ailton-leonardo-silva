import { connection } from "./BaseDatabase";

const selectAllUsers = async (name:string , order:string): Promise<any> => {
  const result = await connection
    .select("*")
    .orderBy("name",`${order}`)
    .orderBy("type",`${order}`)
    .from("aula48_exercicio")
    
  return result;
};

export default selectAllUsers;