import { connection } from "./baseDatabase"

const selectResponsiblesByTask = async (taskId: string) => {
    const result = await connection
      .select(
        "TodoListUser.id as responsible_id",
        "TodoListUser.nickname as responsible_nickname"
      )
      .from("TodoListResponsibleUserTaskRelation")
      .rightJoin(
        "TodoListUser",
        "TodoListUser.id",
        "TodoListResponsibleUserTaskRelation.responsible_user_id"
      )
      .where("TodoListResponsibleUserTaskRelation.task_id", taskId);
  
    return result;
  };

  export default selectResponsiblesByTask;