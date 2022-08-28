import { connection } from "./baseDatabase";

const updateTask = async (
  id: string,
  status: string
) => {
  await connection("TodoListTask")
    .update({
      status
    })
    .where({
      id: id
    });
};

export default updateTask;