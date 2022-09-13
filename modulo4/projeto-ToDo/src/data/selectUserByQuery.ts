import { connection } from "./baseDatabase";

const selectUserByQuery = async (search: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM TodoListUser WHERE nickname = '${search}' OR email = '${search}'
      `);

  return result[0][0];
};

export default selectUserByQuery;
