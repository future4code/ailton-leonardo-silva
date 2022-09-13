import { Request, Response } from "express";
import selectAllProducts from "../data/selectAllProducts";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    let search = req.query.search as string;
    let order = req.query.order as string;

    const products = await selectAllProducts(search, order);
    
    if (products.length == 0) {
      res.status(200).send({ products: "Nenhum produto encontrado." });
    } else {
      res.status(200).send({ products: products });
    }
  } catch (error: any) {
    res.status(res.statusCode).send(error.message);
  }
};

export default getAllProducts;
