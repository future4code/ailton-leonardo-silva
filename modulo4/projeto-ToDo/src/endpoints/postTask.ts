import { Request, Response } from "express";
import insertTask from "../data/insertTask";

const postTask = async (req: Request, res: Response) => {
  try {
    const { id, title, description, limit_date, creator_user_id } = req.body;

    //Transformando em padrão americano a data brasileira
    let data_brasileira = limit_date;
    let data_americana = data_brasileira.split("/").reverse().join("-");

    await insertTask(id, title, description, data_americana, creator_user_id);

    res.status(201).send({
      message: {
        id: id,
        title: title,
        description: description,
        limit_date: data_americana,
        creator_user_id: creator_user_id,
      },
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export default postTask;
