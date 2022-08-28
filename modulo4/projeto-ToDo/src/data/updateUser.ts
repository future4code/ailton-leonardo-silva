import { connection } from "./baseDatabase";

const updateUser = async (
  id: string,
  name: string,
  nickname: string,
  email: string
) => {
  await connection("TodoListUser")
    .update({
      name,
      nickname,
      email,
    })
    .where({
      id: id,
    });
};

export default updateUser;
