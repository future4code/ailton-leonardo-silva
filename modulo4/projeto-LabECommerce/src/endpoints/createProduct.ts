import { Request, Response } from "express";
import insertProduct from "../data/insertProduct";
import { NewProduct } from "../types";
import { v4 as uuidv4 } from "uuid";

const createProduct = async (req: Request, res: Response) => {
  try {
    //Gerando um número de Id aleatório.
    let id = uuidv4();

    const { name, price, image_url } = req.body;

    if (!name || !price || !image_url) {
      res.statusCode = 400;
      throw new Error("Preencha todos os campos.");
    }

    const newProduct: NewProduct = {
      id,
      name,
      price,
      image_url,
    };

    await insertProduct(newProduct);
    res.status(201).send({"id": id , "name": name , "price": price, "image_url": image_url});
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message);
    } else {
      res.status(res.statusCode).send(error.message);
    }
  }
};

export default createProduct;
