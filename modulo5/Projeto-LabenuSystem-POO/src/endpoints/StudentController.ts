import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import StudentData from "../data/StudentData";
import Student from "../model/Student";

class StudentController {
  //CRIAÇÃO DE ESTUDANTE
  async createStudent(req: Request, res: Response) {
    try {
      const { nome, email, data_nascimento, password, turma_id, hobby_id } =
        req.body;
      //Gerando um número de Id aleatório.
      let id = uuidv4();

      //Recebendo a Data no Formato Brasileiro e mudando para o Americano.
      //Refatorei o código para não usar o formato date e mudei para string
      let data_brasileira = data_nascimento;
      let data_americana = data_brasileira.split("/").reverse().join("-");

      if (!nome) {
        throw new Error("O nome não foi informado corretamente.");
      }
      if (!data_americana) {
        throw new Error(
          "A data de início da turma não foi informada corretamente."
        );
      }

      //Instancia de um novo estudante.
      const estudante = new Student(
        id,
        nome,
        email,
        data_americana,
        password,
        turma_id,
        hobby_id
      );

      //Instancia a classe de banco de dados.
      const studentData = new StudentData();
      const answer = await studentData.insertStudent(estudante);

      res.status(201).send({
        id: id,
        nome: nome,
        email: email,
        data_nascimento: data_nascimento,
        password: password,
        turma_id: turma_id,
        hobby_id: hobby_id,
      });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  //BUSCANDO ESTUDANTES POR NOME
  async getStudentByName(req: Request, res: Response) {
    try {
      const search = req.query.search as string;
      
      //Instancia a classe de banco de dados.
      const studentData = new StudentData();

      const answer = await studentData.selectStudentByName(search);
      res.send({ message: answer });
    } catch (error: any) {
      console.log(error.message);
      res.status(500).send("Erro inesperado.");
    }
  }

  //TROCANDO UM ESTUDANTE DE TURMA
  async putStudentOtherClass(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const turma_id = req.body.turma_id;

      if (!turma_id) {
        res.statusCode = 400;
        throw new Error("Informe os dados da nova turma.");
      }
      //Instancia a classe de banco de dados.
      const studentData = new StudentData();

      //Fiz essas 2 seleções para melhorar a experiência do usuário.
      const estudante = await studentData.selectStudentById(id);
      const turma = await studentData.selectClassById(turma_id);

      await studentData.updateStudentOtherClass(id, turma_id)

      res
        .status(200)
        .send(
          `O(A) aluno(a) ${estudante[0].nome} fez a troca para a turma ${turma[0].nome}.`
        );
    } catch (error: any) {
      if (res.statusCode == 200) {
        res.status(500).send(error.message);
      } else {
        res.status(res.statusCode).send(error.message);
      }
    }
  }
}

export default StudentController;
