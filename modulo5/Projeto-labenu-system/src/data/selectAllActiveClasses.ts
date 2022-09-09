import { connection } from "./BaseDataBase";

const selectAllActiveClasses = async () => {
  const result = await connection
    .select("*")
    .orderBy("nome")
    .from("Turma")

    let dataAtual = new Date()

    //Filtrando do result as datas passadas
    const novoResultado = result.filter((filtro) => {
        return filtro.data_termino > dataAtual
    })

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
  for (let i = 0; i < novoResultado.length ; i++) {
    let data_inicio = novoResultado[i].data_inicio;
    let data_termino = novoResultado[i].data_termino;

    novoResultado[i].data_inicio = formatDate(data_inicio);
    novoResultado[i].data_termino = formatDate(data_termino);
  }

  
  return novoResultado;
  
};

export default selectAllActiveClasses;
