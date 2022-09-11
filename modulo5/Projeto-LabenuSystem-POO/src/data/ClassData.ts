import BaseDataBase from "./BaseDataBase";
import Class from "../model/Class";

class ClassData extends BaseDataBase {
  
  //CHAMADA PARA CRIAÇÃO DE TURMAS
  async insertClass(turma: Class): Promise<void> {
    await this.getConnection()
      .insert({
        id: turma.getIdClass(),
        nome: turma.getName(),
        data_inicio: turma.getStartDate(),
        data_termino: turma.getEndDate(),
        modulo: turma.getModule(),
      })
      .into("Turma_POO");
  }
  //BUSCANDO TODAS AS TURMAS
  async selectAllClass() {
    const result = await this.getConnection()
        .select("*")
        .from("Turma_POO");
    
    function padTo2Digits(num: number) {
      return num.toString().padStart(2, "0");
    }

    function formatDate(date: any) {
      return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join("/");
    }

    //For para percorrer o resultado e alterar as datas para o padrão brasileiro
    for (let i = 0; i < result.length; i++) {
      
      let data_inicio = result[i].data_inicio;
      let data_termino = result[i].data_termino;

      result[i].data_inicio = formatDate(data_inicio);
      result[i].data_termino = formatDate(data_termino);
    }
    
    return result;
  }

  //BUSCANDO TODAS AS TURMAS ATIVAS
  async selectAllActiveClasses() {
    const result = await this.getConnection()
      .select("*")
      .orderBy("nome")
      .from("Turma_POO");

    let dataAtual = new Date();

    //Filtrando do result as datas passadas
    const novoResultado = result.filter((filtro) => {
      return filtro.data_termino > dataAtual;
    });

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
    for (let i = 0; i < novoResultado.length; i++) {
      let data_inicio = novoResultado[i].data_inicio;
      let data_termino = novoResultado[i].data_termino;

      novoResultado[i].data_inicio = formatDate(data_inicio);
      novoResultado[i].data_termino = formatDate(data_termino);
    }

    return novoResultado;
  }
}

export default ClassData;
