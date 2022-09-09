import { connection } from "./BaseDataBase";

const selectTeacherById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Docente WHERE id LIKE '${id}'
      `);

  
  return result[0];
};

export default selectTeacherById;