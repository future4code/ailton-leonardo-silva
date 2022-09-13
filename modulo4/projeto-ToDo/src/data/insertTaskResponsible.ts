import { connection } from "./baseDatabase";

const insertTaskResponsible = async (
  task_id: string,
  responsible_user_id: string
): Promise<void> => {
  await connection
    .insert({
      task_id,
      responsible_user_id,
    })
    .into("TodoListResponsibleUserTaskRelation");
};

export default insertTaskResponsible;
