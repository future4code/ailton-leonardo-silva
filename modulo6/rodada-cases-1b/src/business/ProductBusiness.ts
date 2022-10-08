import { ProductDatabase } from "../database/ProductDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { IdGenerator } from "../services/IdGenerator";

export class ProductBusiness {
    
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator,
        private migrations: Migrations
    ) {}

        //*****   SELECIONAR TODOS OS PRODUTOS   *****
        public selectAllProducts = async () => {
            const result = await this.productDatabase.fetchAllProducts();
            const products = [];
            const mapResult = result.map((result:any) => {
                return result.produto_id;
            });
            const mapSemRepeticao:any = [...new Set(mapResult)];
            for (let i = 0; i < mapSemRepeticao.length; i++) {
                const resultName = await this.productDatabase.fetchProductsById(mapSemRepeticao[i]);
                const resultTags = await this.productDatabase.fetchTagsById(mapSemRepeticao[i]);
                let nameOfTags = [];
                for (let index = 0; index < resultTags.length; index++) {
                    const result = await this.productDatabase.fetchTags(resultTags[index].tag_id);
                    nameOfTags.push(result[0].tag);
                }
                products.push({id: mapSemRepeticao[i], nome: resultName[0].nome, tags: nameOfTags});
            }
            return products;
        };

        //*****   SELECIONAR TODOS OS PRODUTOS POR BUSCA   *****
        public selectAllProductsByQuery = async (search:string) => {
            const result = await this.productDatabase.selectProductByName(search);
            if (result.length === 0) {
                throw new NotFoundError ("Produto não encontrado.");
            }
            const products = [];
            const mapResult = result.map((result:any) => {
                return result.id;
            });
            const mapSemRepeticao:any = [...new Set(mapResult)];
            for (let i = 0; i < mapSemRepeticao.length; i++) {
                const resultName = await this.productDatabase.fetchProductsById(mapSemRepeticao[i]);
                const resultTags = await this.productDatabase.fetchTagsById(mapSemRepeticao[i]);
                let nameOfTags = [];
                for (let index = 0; index < resultTags.length; index++) {
                    const result = await this.productDatabase.fetchTags(resultTags[index].tag_id);
                    nameOfTags.push(result[0].tag);
                }
                products.push({
                    id: mapSemRepeticao[i],
                    nome: resultName[0].nome,
                    tags: nameOfTags,
                });
            }
            return products;
        };

        //*****   SELECIONAR TODOS OS PRODUTOS POR TAGS   *****
        public selectAllProductsByTags = async (search:string) => {
            if (!search) {
                throw new ParamsError;
            }
            const result = await this.productDatabase.selectProductByTag(search);
            if (!result || result.length === 0) {
                throw new NotFoundError("Produto não encontrado.");
            }
            const products = [];
            const tag = result[0].tag;
            const id = result[0].id;
            const productsByTag = await this.productDatabase.fetchProductsByTag(id);
            const mapResult = productsByTag.map((result:any) => {
                return result.produto_id;
            });
            for (let i = 0; i < mapResult.length; i++) {
                const resultName = await this.productDatabase.fetchProductsById(mapResult[i]);
                const resultTags = await this.productDatabase.fetchTagsById(mapResult[i]);
                let nameOfTags = [];
                for (let index = 0; index < resultTags.length; index++) {
                    const result = await this.productDatabase.fetchTags(resultTags[index].tag_id);
                    nameOfTags.push(result[0].tag);
                }
                products.push({
                    id: mapResult[i],
                    nome: resultName[0].nome,
                    tags: nameOfTags,
                });
            }
            return products;
        };

        //*****   SELECIONAR O PRODUTO PELA SUA ID   *****
        public selectProductById =  async (id:string) => {
            if (!id || id === ":id") {
                throw new ParamsError;
            }
            const result = await this.productDatabase.fetchProductsById(id);
            if (result.length === 0) {
                throw new NotFoundError("Produto não encontrado.");
            }
            const products = [];
            const resultTags = await this.productDatabase.fetchTagsById(result[0].id);
            let nameOfTags = [];
            for (let index = 0; index < resultTags.length; index++) {
                const result = await this.productDatabase.fetchTags(resultTags[index].tag_id);
                nameOfTags.push(result[0].tag);
            }
            products.push({id: result[0].id, nome: result[0].nome, tags: nameOfTags});
            return products;
        };

        //*****   POPULATE   *****
        public populate = async () => {
            const migrations = new Migrations();
            migrations.execute();
        };
    }

