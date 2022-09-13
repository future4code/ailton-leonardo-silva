import BaseDataBase from "./BaseDataBase";
import Student from "../model/Student";

class StudentData extends BaseDataBase {
  //CHAMADA PARA CRIAÇÃO DE ESTUDANTE
  async insertStudent(estudante: Student): Promise<void> {
    await this.getConnection()
      .insert({
        id: estudante.getIdStudent(),
        nome: estudante.getName(),
        email: estudante.getEmail(),
        data_nascimento: estudante.getBirthDate(),
        password: estudante.getPassword(),
        turma_id: estudante.getIdClass(),
        hobby_id: estudante.getIdHobby(),
      })
      .into("Estudante_POO");
  }

  //SELECIONAR UM ESTUDANTE POR NOME
  async selectStudentByName(search: string): Promise<any> {
    const result = await this.getConnection().raw(`
          SELECT * FROM Estudante_POO WHERE nome LIKE '%${search}%'
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

  //SELECIONAR UM ESTUDANTE PELO SEU ID
  async selectStudentById(id: string): Promise<any> {
    const result = await this.getConnection().raw(`
          SELECT * FROM Estudante_POO WHERE id LIKE '${id}'
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

  //TROCAR UM ESTUDANTE DE TURMA
  async updateStudentOtherClass(id: string, turma_id: string) {
    await this.getConnection()
      .update({
        turma_id,
      })
      .where({
        id: id,
      })
      .into("Estudante_POO");
  }
}

export default StudentData;
