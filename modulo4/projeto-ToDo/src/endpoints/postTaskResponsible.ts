import { Request, Response } from "express";
import insertTaskResponsible from "../data/insertTaskResponsible";

const postTaskResponsible = async (req: Request, res: Response) => {
  try {
    const { task_id, responsible_user_id } = req.body;

    await insertTaskResponsible(task_id, responsible_user_id);

    res.status(201).send({
      message: {
        task_id: task_id,
        responsible_user_id: responsible_user_id,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export default postTaskResponsible;
