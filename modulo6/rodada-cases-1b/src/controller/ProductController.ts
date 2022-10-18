import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { BaseError } from "../errors/BaseError";

export class ProductController {

    constructor(
        private productBusiness: ProductBusiness
    ) {}

    
        //******************************************************************/
        //***********   MÉTODO - BUSCAR TODOS OS PRODUTOS   ****************/
        //******************************************************************/
        public getAllProducts = async (req: Request, res: Response) =>  {
            try {
                const response = await this.productBusiness.selectAllProducts();
                res.status(200).send({ products: response });
            }
            catch (error) {
                res.status(500).send({ message: error.message });
            }
        };

        //******************************************************************/
        //********   MÉTODO - BUSCAR TODOS OS PRODUTOS POR NOME   **********/
        //******************************************************************/
        public getProductsByName = async (req: Request, res: Response) =>  {
            try {
                let nome = req.query.nome as string;
                
                const response = await this.productBusiness.selectAllProductsByQuery(nome);
                res.status(200).send({ products: response });
            }
            catch (error) {
                res.status(500).send({ message: error.message });
            }
        };

        //******************************************************************/
        //********   MÉTODO - BUSCAR TODOS OS PRODUTOS POR ID   ************/
        //******************************************************************/
        public getProductById = async (req: Request, res: Response) => {
            try {
                let id = req.params.id as string;
                const response = await this.productBusiness.selectProductById(id);
                res.status(200).send({ products: response });
            }
            catch (error) {
                res.status(500).send({ message: error.message });
            }
        };

        //******************************************************************/
        //********   MÉTODO - BUSCAR TODOS OS PRODUTOS POR TAG   ***********/
        //******************************************************************/
        public getProductByTag = async (req: Request, res: Response) => {
            try {
                let tag = req.query.tag as string;
                
                const response = await this.productBusiness.selectAllProductsByTags(tag);
                res.status(200).send({ products: response });
            }
            catch (error) {
                res.status(500).send({ message: error.message });
            }
        };

        //******************************************************************/
        //*********************   MÉTODO - POPULATE   **********************/
        //******************************************************************/
        public populate = async (req: Request, res: Response) => {
            try {
                const response = await this.productBusiness.populate();
                res.status(201).send({ message: "Banco de dados criado e dados inseridos com sucesso." });
            }
            catch (error) {
                res.status(500).send({ message: error.message });
            }
        };
    }

