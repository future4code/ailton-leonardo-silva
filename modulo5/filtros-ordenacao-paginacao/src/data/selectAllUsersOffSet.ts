import { connection } from "./BaseDatabase";

const selectAllUsersOffSet = async (name:string , order:string, usuariosPorPagina: number , offset: number): Promise<any> => {
  const result = await connection
    .select("*")
    .where("name","like",`%${name}%`)
    .orderBy("name",`${order}`)
    .orderBy("type",`${order}`)
    .from("aula48_exercicio")
    .limit(usuariosPorPagina)
    .offset(offset)
    
  return result;
};

export default selectAllUsersOffSet;