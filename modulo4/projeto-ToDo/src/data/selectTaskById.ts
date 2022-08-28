import { connection } from "./baseDatabase"

const selectTaskById = async (id: string): Promise<any> => {
  const result = await connection
    .select(
      "TodoListTask.id as task_id",
      "TodoListTask.title",
      "TodoListTask.description",
      "TodoListTask.limit_date",
      "TodoListTask.status",
      "TodoListUser.id as creator_id",
      "TodoListUser.nickname as creator_nickname"
    )
    .from("TodoListTask")
    .innerJoin(
      "TodoListUser",
      "TodoListUser.id",
      "TodoListTask.creator_user_id"
    )
    .where("TodoListTask.id", id);

  function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date: Date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }

  let limit_date = result[0].limit_date;

  result[0].limit_date = formatDate(limit_date);

  return result;
};

export default selectTaskById;
