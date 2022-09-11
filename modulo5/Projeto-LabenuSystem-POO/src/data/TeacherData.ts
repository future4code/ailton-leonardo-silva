import BaseDataBase from "./BaseDataBase";
import Teacher from "../model/Teacher";

class TeacherData extends BaseDataBase {
  //CHAMADA PARA CRIAÇÃO DE DOCENTE
  async insertTeacher(docente: Teacher): Promise<void> {
    console.log(docente);
    await this.getConnection()
      .insert({
        id: docente.getIdTeacher(),
        nome: docente.getName(),
        email: docente.getEmail(),
        data_nascimento: docente.getBirthDate(),
        turma_id: docente.getIdClass(),
        especialidade_id: docente.getIdSpecialty(),
      })
      .into("Docente_POO");
  }

  //BUSCANDO TODOS OS DOCENTES
  async selectAllTeachers() {
    const result = await this.getConnection().select("*").from("Docente_POO");

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
      let data_nascimento = result[i].data_nascimento;
      
      result[i].data_nascimento = formatDate(data_nascimento);

    }

    return result;
  }

  //SELECIONAR UM DOCENTE PELO NOME
  async selectTeacherByName(search: string): Promise<any> {
    const result = await this.getConnection().raw(`
          SELECT * FROM Docente_POO WHERE nome LIKE '%${search}%'
        `);

    //Funções auxiliares para formatar a data sem zero para inserir o zero
    // "5/2/2022" ---> "05/02/2022"
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
    for (let i = 0; i < result[0].length; i++) {
      let data_nascimento: Date = result[0][i].data_nascimento;
      result[0][i].data_nascimento = formatDate(data_nascimento);
    }

    return result[0];
  }

    //SELECIONAR TODOS OS DOCENTES POR SUA ESPECIALIDADE
    async selectAllTeachersSpecialty(search: string): Promise<any> {

      const resultSearch = await this.getConnection().raw(`
          SELECT * FROM Especialidade_POO WHERE nome LIKE '%${search}%'
        `);
      console.log(resultSearch[0][0])
      const result = await this.getConnection().raw(`
      SELECT * FROM Docente_POO WHERE especialidade_id LIKE '%${resultSearch[0][0].id}%'
    `);
      
      //Funções auxiliares para formatar a data sem zero para inserir o zero
      // "5/2/2022" ---> "05/02/2022"
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
      for (let i = 0; i < result[0].length; i++) {
        let data_nascimento: Date = result[0][i].data_nascimento;
        result[0][i].data_nascimento = formatDate(data_nascimento);
      }
  
      return result[0];
    }

  //SELECIONAR UM DOCENTE PELO SEU ID
  async selectTeacherById(id: string): Promise<any> {
    const result = await this.getConnection().raw(`
          SELECT * FROM Docente_POO WHERE id LIKE '${id}'
        `);

    return result[0];
  }

  //SELECIONAR UMA TURMA PELO ID
  async selectClassById(id: string): Promise<any> {
    const result = await this.getConnection().raw(`
          SELECT * FROM Turma_POO WHERE id LIKE '${id}'
        `);
    return result[0];
  }

  //TROCAR UM DOCENTE DE TURMA
  async updateTeacherOtherClass(id: string, turma_id: string) {
    await this.getConnection()
      .update({
        turma_id,
      })
      .where({
        id: id,
      })
      .into("Docente_POO");
  }
}

export default TeacherData;
