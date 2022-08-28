import { Request, Response } from "express";
import insertUser from "../data/insertUser";

const postUser = async (req: Request, res: Response) => {
  try {
    const { id, name, nickname, email } = req.body;

    await insertUser(id, name, nickname, email);

    res.status(201).send({
      message: { id: id, name: name, nickname: nickname, email: email },
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export default postUser;
