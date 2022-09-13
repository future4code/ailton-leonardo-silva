import { Request, Response } from "express";
import updateUser from "../data/updateUser";

const putUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const { name, nickname, email } = req.body;

    await updateUser(id, name, nickname, email);

    res.status(200).send({
      message: { id: id, name: name, nickname: nickname, email: email },
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
};

export default putUser;
