import { ProductBusiness } from "../business/ProductBusiness";
import { ProductController } from "../controller/ProductController";
import { ProductDatabase } from "../database/ProductDatabase";
import { IdGenerator } from "./IdGenerator";

export const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase(),
        new IdGenerator(),
        new Migrations()
    )
);

