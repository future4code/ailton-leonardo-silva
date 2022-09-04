import { Request, Response } from "express";
import deleteUser from "../data/deleteUser";
import selectUserById from "../data/selectUserById";

const eraseUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const user: any = await selectUserById(id);
    
    if (!user[0]) {
      res.statusCode = 404;
      throw new Error("Usuário não encontrado.");
    }
    await deleteUser(user[0].id);

    res.status(200).send("Usuário deletado com sucesso.");
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
};

export default eraseUser;
