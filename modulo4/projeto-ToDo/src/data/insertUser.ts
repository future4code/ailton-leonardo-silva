import { connection } from "./baseDatabase";

//Criando um novo usuário
const insertUser = async (
  id: string,
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  await connection
    .insert({
      id,
      name,
      nickname,
      email,
    })
    .into("TodoListUser");
};

export default insertUser;
