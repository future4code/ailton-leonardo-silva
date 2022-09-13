import { Request, Response } from "express";
import selectResponsiblesByTask from "../data/selectResponsiblesByTask";
import selectTaskById from "../data/selectTaskById";

const getTaskAndYourResponsibles = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    if (!id) {
      res.statusCode = 400;
      throw new Error("Informe a chave ID corretamente.");
    }

    const task = await selectTaskById(id);
    const responsible = await selectResponsiblesByTask(id);

    if (!task[0]) {
      res.statusCode = 404;
      throw new Error("Tarefa não encontrada.");
    }

    const taskWithResponsible = { ...task[0], responsibleUsers: responsible };

    res.status(200).send(taskWithResponsible);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export default getTaskAndYourResponsibles;
