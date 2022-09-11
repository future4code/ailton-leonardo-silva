import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import ClassData from "../data/ClassData";
import Class from "../model/Class";

class ClassController {
  //CRIAÇÃO DE TURMA
  async createClass(req: Request, res: Response) {
    try {
      const { nome, data_inicio, data_termino } = req.body;
      //Gerando um número de Id aleatório.
      let id = uuidv4();
      const modulo = 0;

      //Recebendo a Data no Formato Brasileiro e mudando para o Americano.
      //Refatorei o código para não usar o formato date e mudei para string
      let data_brasileira = data_inicio;
      let data_americana = data_brasileira.split("/").reverse().join("-");
      let novaData_Inicial = data_americana;

      data_brasileira = data_termino;
      data_americana = data_brasileira.split("/").reverse().join("-");
      let novaData_Termino = data_americana;

      if (!nome) {
        throw new Error("O nome não foi informado corretamente.");
      }
      if (!novaData_Inicial) {
        throw new Error(
          "A data de início da turma não foi informada corretamente."
        );
      }
      if (!novaData_Termino) {
        throw new Error(
          "A data de término da turma não foi informada corretamente."
        );
      }

      //Instancia uma nova turma.
      const turma = new Class(
        id,
        nome,
        novaData_Inicial,
        novaData_Termino,
        modulo
      );

      //Instancia a classe de banco de dados.
      const classData = new ClassData();
      const answer = await classData.insertClass(turma);

      res
        .status(201)
        .send({
          id: id,
          nome: nome,
          data_inicio: data_inicio,
          data_termino: data_termino,
          modulo: modulo,
        });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  //BUSCANDO TODAS AS TURMAS
  async getAllClasses(req: Request, res: Response) {
    try {
      //Instancia a classe de banco de dados.
      const classData = new ClassData();
      const answer = await classData.selectAllClass();

      if (answer.length == 0) {
        res.status(200).send({ message: "Nenhuma turma encontrada." });
      } else {
        res.status(200).send({ classes: answer });
      }

      res.status(200).send();
    } catch (error: any) {
      res.status(res.statusCode).send(error.message);
    }
  }

  //BUSCANDO TODAS AS TURMAS ATIVAS
  async getAllActiveClasses(req: Request, res: Response) {
    try {
      //Instancia a classe de banco de dados.
      const classData = new ClassData();
      const answer = await classData.selectAllActiveClasses();

      if (answer.length == 0) {
        res.status(200).send({ message: "Nenhuma turma encontrada." });
      } else {
        res.status(200).send({ classes: answer });
      }

      res.status(200).send();
    } catch (error: any) {
      res.status(res.statusCode).send(error.message);
    }
  }
}

export default ClassController;
