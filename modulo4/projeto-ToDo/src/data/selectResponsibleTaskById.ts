import { connection } from "./baseDatabase";

const selectResponsibleTaskbyID = async (id: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM TodoListResponsibleUserTaskRelation WHERE task_id = '${id}'
    `);

  return result[0];
};

export default selectResponsibleTaskbyID;
