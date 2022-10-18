import * as path from "path";
import { FileSystem } from "../../services/FileSystem";
import { IdGenerator } from "../../services/IdGenerator";

//Chamando o serviço para leitura do arquivo JSON
const lendoJSON:any = new FileSystem().readFileJson(path.resolve(__dirname, "../../../src/products.json")
);

//Preparando a variável para o Migrations
export const products: any = lendoJSON.products.map((result: any) => {
    return { id: result.id, nome: result.name };
  }
);

// console.log(products) // Preparado para o Migrations

//Com o flatMap eu preparo as minhas TAGS para serem inseridas no DB com ID único
const mapTags: any = lendoJSON.products.flatMap((result: any) => {
  return result.tags;
});

const tagsSemRepeticoes: any = [...new Set(mapTags)];

//Preparando a lógica para a inserção na Tabela Tags
export let tags: any = [];
for (let i = 0; i < tagsSemRepeticoes.length; i++) {
  const uuid = new IdGenerator().generate();
  tags.push({ id: uuid, tag: tagsSemRepeticoes[i] });
}
console.log(tags); // Preparado para o Migrations

const mapProdutoTags = lendoJSON.products.map((result:any) => {
    return { id: result.id, tags: result.tags };
});

export let products_tags: Array<object> = []

for (let index = 0; index < exports.products.length; index++) {

    for (let i = 0; i < Number(mapProdutoTags[index].tags.length); i++) {

        for (let contaTags = 0; contaTags < tags.length; contaTags++)

            if (mapProdutoTags[index].tags[i] === tags[contaTags].tag) {
                mapProdutoTags[index].tags[i] = tags[contaTags].id;
                products_tags.push({ produto_id: mapProdutoTags[index].id, tag_id: tags[contaTags].id });
            }
    }
}
console.log(products_tags); // Preparado para o Migrations


