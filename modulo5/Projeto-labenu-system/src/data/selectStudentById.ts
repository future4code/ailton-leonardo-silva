import { connection } from "./BaseDataBase";

const selectStudentById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Estudante WHERE id LIKE '${id}'
      `);

  
  return result[0];
};

export default selectStudentById;
