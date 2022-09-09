import { connection } from "./BaseDataBase";

const selectAllTeachers = async () => {
  
  const result = await connection
    .select("*")
    .orderBy("nome")
    .from("Docente")
  
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
    let data_nascimento:Date= result[i].data_nascimento;

    result[i].data_nascimento = formatDate(data_nascimento);
    
  }

  return result;
  
};

export default selectAllTeachers;
