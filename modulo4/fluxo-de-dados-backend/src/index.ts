//Importações do Express
import express, { Express , request, Request, Response } from "express";
import cors from "cors";
import { product , products } from "./data"

//Aula de Aprofundamento Express
//Middleware
const app:Express = express()
app.use(express.json())
app.use(cors())

//Exercício 1 - Teste de Endpoint - OK
app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})
//Exercício 2 - Criar arquivo data.ts e array de produtos - OK

//Exercício 3 e 7 - Crie um endpoint que insira um novo produto.
app.post("/lojinha/createProduct", (req:Request, res:Response) => {
    try {
        const {id, name, price} = req.body
        // const id:string = req.body.id
        // const name:string = req.body.name
        // const price:number = req.body.price
        
        // Verifica -> undefined , string vazia , null , false

        if (!id) {
            res.statusCode = 401
            throw new Error(`O campo de identificação deve ser preenchido.`)
        }

        if (!name) {
            res.statusCode = 401
            throw new Error(`O campo de identificação deve ser preenchido.`)
        }

        if (name !== String(name)) {
            res.statusCode = 401
            throw new Error(`O nome deve ser uma String.`)
        }
       
        if (!price) {
            res.statusCode = 401
            throw new Error(`O valor deve ser preenchido.`)
        }

        if (price < 0) {
            res.statusCode = 401
            throw new Error(`O valor deve ser maior que 0.`)
        }

        if (price !== Number(price)) {
            res.statusCode = 401
            throw new Error(`O valor deve ser um número.`)
        }
        const newProducts:product = { id, name, price }
    
        products.push(newProducts)
        res.status(201).send(newProducts)
        console.log(products)
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})

//Exercício 4 - Retornar todos os produtos

app.get("/lojinha/getAllProducts", (req:Request, res:Response) => {          
    res.send(products)
    console.log(products)
})

//Exercício 5 e 8 - Mudar o preço do produto - OK
app.put("/lojinha/changePrice/:id", (req:Request, res:Response) =>{
    try {
        const id = req.params.id
        const preco = req.body.price

        if (!preco) {
            res.statusCode = 401
            throw new Error(`O valor deve ser preenchido.`)
        }

        if (preco < 0) {
            res.statusCode = 401
            throw new Error(`O valor deve ser maior que 0.`)
        }

        if (preco !== Number(preco)) {
            res.statusCode = 401
            throw new Error(`O valor deve ser um número.`)
        }
        
        //Filtrando o produto
        const indexProduct: any = products.findIndex((produto) =>{
            return produto.id === id
        })

        if (!indexProduct) {
            res.statusCode = 401
            throw new Error(`Produto não encontrado.`)
        }

        //Fazendo a edição do valor
        products[indexProduct].price = Number(preco)
        res.send(products)
        
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }

} )

//Exercício 6 e 9 - Delete um endpoint
app.delete("/lojinha/deleteProduct/:id", (req:Request , res:Response) => {
    try {
        const id = req.params.id

        if (!id) {
            res.statusCode = 401
            throw new Error(`Produto inválido.`)
        }
        
        //Filtrando o produto
        const filterProduct: product[] = products.filter((produto) =>{
            return produto.id !== id
        })
        
        if (!filterProduct) {
            res.statusCode = 401
            throw new Error(`Produto não encontrado.`)
        }

        res.send(filterProduct)
    }
    catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }
})









//Documentação



//Ligando o servidor
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})