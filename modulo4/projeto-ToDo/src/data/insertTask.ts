import { connection } from "./baseDatabase";

const insertTask = async (
  id: string,
  title: string,
  description: string,
  limit_date: Date,
  creator_user_id: string
): Promise<void> => {
  await connection
    .insert({
      id,
      title,
      description,
      limit_date,
      creator_user_id,
    })
    .into("TodoListTask");
};

export default insertTask;
