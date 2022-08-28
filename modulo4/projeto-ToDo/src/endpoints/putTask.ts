import { Request, Response } from "express";
import updateTask from "../data/updateTask";

const putTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const { status } = req.body;

    await updateTask(id, status);

    res.status(200).send({
      message: { id: id, status: status },
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export default putTask;
