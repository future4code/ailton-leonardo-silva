import { connection } from "./BaseDataBase";

const selectStudentByName = async (search: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Estudante WHERE nome LIKE '%${search}%'
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

  //For para percorrer o resultado e alterar as datas para o padrão brasileiro
  for (let i = 0; i < (result[0].length) ; i++) {
    
    let data_nascimento:Date = result[0][i].data_nascimento;
    
    result[0][i].data_nascimento = formatDate(data_nascimento);
    
  }

  return result[0];
};

export default selectStudentByName;
