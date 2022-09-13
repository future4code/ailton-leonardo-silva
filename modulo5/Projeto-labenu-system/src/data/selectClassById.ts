import { connection } from "./BaseDataBase";

const selectClassById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Turma WHERE id LIKE '${id}'
      `);

  
  return result[0];
};

export default selectClassById;