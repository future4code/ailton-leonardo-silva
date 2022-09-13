import { Request, Response } from "express";
import selectAllUsers from "../data/selectAllUsers";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    let name = req.query.nome as string;
    let order = req.query.order as string;
    // verifica se vem undefined , se vier , a variavel recebe uma string vazia e retorna todas as receitas
    if (!name) {
      name = "";
    }

    // verifica se vem undefined e por padrão usamos o ASC
    if (!order) {
      order = "asc";
    }
    const user = await selectAllUsers(name, order);

    if (!user.length) {
      res.statusCode = 404;
      throw new Error("Nenhum usuário encontrado.");
    }

    res.status(200).send(user);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};

export default getAllUsers;
