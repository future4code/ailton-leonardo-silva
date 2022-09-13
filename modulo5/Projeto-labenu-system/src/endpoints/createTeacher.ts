import { Request, Response } from "express";
import insertTeacher from "../data/insertTeacher";
import { v4 as uuidv4 } from "uuid";
import { NewTeacher } from "../types/TypeTeacher";

const createTeacher = async (req: Request, res: Response) => {
  try {
    //Gerando um número de Id aleatório.
    let id = uuidv4();

    const { nome, email, data_nascimento, turma_id } = req.body;

    //Recebendo a Data no Formato Brasileiro e mudando para o Americano.
    //Refatorei o código para não usar o formato date e mudei para string
    let data_brasileira = data_nascimento;
    let data_americana = data_brasileira.split("/").reverse().join("-");

    // if (!nome || !email || !password || turma_id) {
    //   res.statusCode = 400;
    //   throw new Error("Preencha todos os campos.");
    // }
    
    if (!nome) {
      res.statusCode = 400;
      throw new Error("O campo nome deve ser preenchido.");
    }

    const newTeacher: NewTeacher = {
      id,
      nome,
      email,
      data_nascimento: data_americana,
      turma_id,
    };

    await insertTeacher(newTeacher);
    res
      .status(201)
      .send({
        id: id,
        nome: nome,
        email: email,
        data_nascimento: data_nascimento,
        turma_id: turma_id,
      });
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
};

export default createTeacher;
