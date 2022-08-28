import { connection } from "./baseDatabase";

const selectTask5 = async (id: string): Promise<any> => {
  const result = await connection.raw(`
          SELECT * FROM TodoListTask WHERE id = '${id}'
        `);

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

  let limit_date = result[0][0].limit_date;

  result[0][0].limit_date = formatDate(limit_date);
  return result[0][0];
};
export default selectTask5;
