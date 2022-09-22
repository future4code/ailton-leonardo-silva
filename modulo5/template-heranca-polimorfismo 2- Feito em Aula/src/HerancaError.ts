import express from "express"

const app = express()


class BaseError extends Error{
    public statusCode:number

    constructor(message:string,statusCode:number){
        super(message)
        this.statusCode = statusCode
    }
}

class MissingFields extends BaseError{
    constructor(){
        super("Missing fields to complet",404)
    }
}


app.get("/criar-produto", (req, res) => {
    try {
        const idProduto = 10
        const nomeProduto = ""
        const valorProduto = 100

        if (!idProduto || !nomeProduto || !valorProduto) {
            throw new MissingFields()
        }
        res.send("produto Criado")
    } catch (error: any) {
        res.status(error.statusCode).send({ message: error.message })
    }
})

app.get("/criar-pessoa", (req, res) => {
    try {
        const idPessoa = 10
        const nomePessoa = ""
       

        if (!idPessoa || !nomePessoa ) {
            throw new MissingFields()
        }
        res.send("usuario Criado")
    } catch (error: any) {
        res.status(error.statusCode).send({ message: error.message })
    }
})

app.get("/criar-endereco", (req, res) => {
    try {
        const idEndereco = 10
        const rua = ""
        
        if (!idEndereco || !rua ) {
            throw new MissingFields()
        }
        res.send("usuario Criado")
    } catch (error: any) {
        res.status(res.statusCode).send({ message: error.message })
    }
})


app.listen(3003,()=>{
    console.log("servidor esta rodando")
})