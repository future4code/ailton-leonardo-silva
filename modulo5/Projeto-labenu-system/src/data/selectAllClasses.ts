import { connection } from "./BaseDataBase";

const selectAllClasses = async () => {
  

  const result = await connection
    .select("*")
    .orderBy("nome")
    .from("Turma")
    

  function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
  }
  
  function formatDate(date:any) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/");
  }
  
  //For para percorrer o resultado e alterar as datas para o padrão brasileiro
  for (let i = 0; i < result.length ; i++) {
    let data_inicio:Date = result[i].data_inicio;
    let data_termino:Date = result[i].data_termino;

    result[i].data_inicio = formatDate(data_inicio);
    result[i].data_termino = formatDate(data_termino);
  }

  return result;
  
};

export default selectAllClasses;
