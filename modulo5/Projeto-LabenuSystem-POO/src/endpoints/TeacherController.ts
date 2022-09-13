import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import TeacherData from "../data/TeacherData";
import Teacher from "../model/Teacher";

class TeacherController {
  //CRIAÇÃO DE ESTUDANTE
  async createTeacher(req: Request, res: Response) {
    try {
      const { nome, email, data_nascimento, turma_id, especialidade_id } =
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

      //Instancia um novo docente.
      const docente = new Teacher(
        id,
        nome,
        email,
        data_americana,
        turma_id,
        especialidade_id
      );

      //Instancia a classe de banco de dados.
      const teacherData = new TeacherData();
      const answer = await teacherData.insertTeacher(docente);

      res.status(201).send({
        id: id,
        nome: nome,
        email: email,
        data_nascimento: data_nascimento,
        turma_id: turma_id,
        especialidade_id: especialidade_id,
      });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  //BUSCANDO TODOS OS DOCENTES
  async getAllTeachers(req: Request, res: Response) {
    try {
      
      //Instancia a classe de banco de dados.
      const teacherData = new TeacherData();

      const answer = await teacherData.selectAllTeachers();
      res.send({ message: answer });
    } catch (error: any) {
      console.log(error.message);
      res.status(500).send("Erro inesperado.");
    }
  }

  //BUSCANDO TODOS OS DOCENTES POR ESPECIALIDADE
  async getAllTeachersSpecialty(req: Request, res: Response) {
    try {
      const search = req.query.search as string
      //Instancia a classe de banco de dados.
      const teacherData = new TeacherData();

      const answer = await teacherData.selectAllTeachersSpecialty(search);
      res.send({ message: answer });
    } catch (error: any) {
      console.log(error.message);
      res.status(500).send("Erro inesperado.");
    }
  }


  //TROCANDO UM DOCENTE DE TURMA
  async putTeacherOtherClass(req: Request, res: Response) {
    try {
      const id = req.params.id as string;
      const turma_id = req.body.turma_id;

      if (!turma_id) {
        res.statusCode = 400;
        throw new Error("Informe os dados da nova turma.");
      }
      //Instancia a classe de banco de dados.
      const teacherData = new TeacherData();

      //Fiz essas 2 seleções para melhorar a experiência do usuário.
      const docente = await teacherData.selectTeacherById(id);
      const turma = await teacherData.selectClassById(turma_id);

      await teacherData.updateTeacherOtherClass(id, turma_id)

      res
        .status(200)
        .send(
          `O(A) docente(a) ${docente[0].nome} fez a troca para a turma ${turma[0].nome}.`
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

export default TeacherController;
