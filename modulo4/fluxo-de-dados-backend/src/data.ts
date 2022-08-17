//Tipo do produto
export type product = {
    id: string,
    name: string,
    price:number
}

//Array de Produtos
export const products:product[] = [
    {
        "id": "Camisas_Masculinas_Verao_1",
        "name": "Camisa",
        "price" : 99.00
    },
    {
        "id": "Sapatos_Masculinos_1",
        "name": "Sapato Preto",
        "price" : 289.00
    },
    {
        "id": "Carteira_1",
        "name": "Carteira, com o logotipo da nossa loja",
        "price" : 49.00
    },
    {
        "id": "Sapatos_Femininos_1",
        "name": "Sapato Feminino",
        "price" : 399.00
    },

]