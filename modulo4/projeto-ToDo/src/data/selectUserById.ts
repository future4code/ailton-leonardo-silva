import { connection } from "./baseDatabase";

const selectUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
          SELECT * FROM TodoListUser WHERE id = '${id}'
        `);

  return result[0][0];
};

export default selectUserById;
