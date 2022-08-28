import { connection } from "./baseDatabase";

const selectUserTasksbyId = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM TodoListTask WHERE creator_user_id = '${id}'
  `);

  function data2Digitos(num: number) {
    return num.toString().padStart(2, "0");
  }

  function formatDate(date: Date) {
    return [
      data2Digitos(date.getDate()),
      data2Digitos(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }

  //Fazendo um FOR para formatar a data de retorno do Array.
  for (let i = 0; i < result[0].length; i++) {
    result[0][i].limit_date = formatDate(result[0][i].limit_date);
  }

  return result[0];
};

export default selectUserTasksbyId;
