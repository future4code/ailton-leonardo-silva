import { Request, Response } from "express";
import insertPurchase from "../data/insertPurchase";
import { NewPurchase } from "../types";
import { v4 as uuidv4 } from "uuid";
import selectProductById from "../data/selectProductById";

const createPurchase = async (req: Request, res: Response) => {
  try {
    //Gerando um número de Id aleatório.
    let id = uuidv4();

    const { user_id, product_id, quantity } = req.body;

    if (!user_id || !product_id || !quantity) {
      res.statusCode = 400;
      throw new Error("Preencha todos os campos.");
    }

    //Chamada para poder obter o valor correto do produto e multiplicar pela quantidade.
    const productPrice = await selectProductById(product_id);
    let total_price: number = quantity * Number(productPrice[0].price);

    const newPurchase: NewPurchase = {
      id,
      user_id,
      product_id,
      quantity,
      total_price,
    };

    await insertPurchase(newPurchase);
    res.status(201)
      .send({
        id: id,
        product_id: product_id,
        user_id: user_id,
        quantity: quantity,
        total_price: total_price,
      });
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
};

export default createPurchase;
