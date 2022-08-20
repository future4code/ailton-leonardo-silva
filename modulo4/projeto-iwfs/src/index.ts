//Importações do Express
import express, { Express , request, Request, Response } from "express";
import cors from "cors";
import { clientesDB, cliente, transacao } from "./data"

//Projeto IWFS - Sistema Bancário
//Middleware
const app:Express = express()
app.use(express.json())
app.use(cors())

//Teste de Endpoint - OK
app.get("/iwfs/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})

//Endpoint para trazer todos os Clientes
app.get("/ifws/clientes", (req:Request , res:Response) => {
    let errorCode = 400 
    try {
        if (!clientesDB) {
            errorCode = 404
            throw new Error("Usuários não encontrados.")
        }
        if (!clientesDB.length) {
            errorCode = 401
            throw new Error("Usuários não encontrados.")
        }
        res.status(200).send(clientesDB)
    } catch (error : any) {
        res.status(errorCode || 500).send({ message: error.message })
    }
})

//Endpoint para ver o saldo da conta por CPF
app.get("/ifws/clientes/:cpf", (req:Request , res:Response) => {
    let errorCode = 400 
    try {
        const cpf = req.params.cpf
        if (!clientesDB) {
            errorCode = 404
            throw new Error("Usuários não encontrados.")
        }
        if (!clientesDB.length) {
            errorCode = 401
            throw new Error("Usuários não encontrados.")
        }

        //Check do CPF (Desafio)
        const clienteCPF:cliente[] = clientesDB.filter((cliente) => {
            cliente.cpf === Number(cpf)
            errorCode = 404
            throw new Error("Não encontramos esse CPF em nossa base de dados.")
        })

        //Filtro do cliente
        const saldoCliente:cliente[] = clientesDB.filter((cliente) => {
            return cliente.cpf === Number(cpf)
        }).map((saldo:any) => {
            return saldo.saldo
        })
        
        res.send(saldoCliente)

    } catch (error : any) {
        res.status(errorCode || 500).send({ message: error.message })
    }
})

//Endpoint de Criação de Conta - Check de idade e CPF
app.post("/iwfs/clientesDB", (req:Request, res:Response) => {   
    let errorCode = 400       
    try {
        const { id , nome , cpf , nascimento, saldo, extrato } = req.body

        if (!clientesDB) {
            errorCode = 404
            throw new Error("Usuários não encontrados.")
        }
        if (!clientesDB.length) {
            errorCode = 404
            throw new Error("Usuários não encontrados.")
        }
       
        const newClient: cliente = { id , nome , cpf , nascimento , saldo , extrato } 

        if(!nome || !cpf || !nascimento ){
            errorCode = 422
            throw new Error("Algum campo nao foi preenchido corretamente.")
        }

        //Checagem para saber se o usuário é menor de 18 anos.
        const ChecaIdade18 = (data:any) => {
            const d = new Date()
            //Transformando em padrão americano a data brasileira
            let data_brasileira = data;
            let data_americana = data_brasileira.split('/').reverse().join('-');
            data = data_americana
            
            const date = new Date (data)
            //Pegar o dia atual
            const anoAtual = d.getFullYear()
            const mesAtual = d.getMonth() + 1
            const diaAtual = d.getDate()
            
            //Desmembrando a data de nascimento
            const ano = date.getFullYear()
            const dia = (date.getDate()) + 1
            const mes = (date.getMonth()) + 1
        
            const idade = anoAtual - ano
            
            if (idade <= 18 && mesAtual < mes || mesAtual === mes && diaAtual < dia) {
                errorCode = 401
                throw new Error ("O usuário tem menos de 18 anos e não pode abrir uma conta.")
            }
        }
        ChecaIdade18(nascimento)

        //Check do CPF (Desafio)
        const clienteCPF:cliente[] = clientesDB.filter((cliente) => {
            cliente.cpf === cpf
            errorCode = 409
            throw new Error("Esse CPF já está cadastrado em nossa base de dados.")
        })
        
        clientesDB.push(newClient)

        res.status(201).send(newClient)
    } catch (error:any) {
        res.status(errorCode || 500).send({ message: error.message })
    }
})

//Endpoint de Movimentação de Conta
app.put("/iwfs/PutclientesDB", (req:Request, res:Response) => {   
    let errorCode = 400       
    try {
        const nome:string = req.body.nome
        const cpf:number = req.body.cpf
        const extrato:any= req.body.extrato

        if (!clientesDB) {
            errorCode = 404
            throw new Error("Usuários não encontrados.")
        }
        if (!clientesDB.length) {
            errorCode = 404
            throw new Error("Usuários não encontrados.")
        }
               
        if(!nome || !cpf ){
            errorCode = 422
            throw new Error("Algum campo nao foi preenchido corretamente.")
        }

        let novoSaldo:number
        const filtraCliente:any = clientesDB.filter((cliente) => {
            return cliente.cpf === cpf
        })
        
        const mapSaldo:any = filtraCliente.map((saldo:any) => {
            return saldo.saldo
        })
        
        const clienteIndex = clientesDB.findIndex(cliente => cliente.cpf === cpf && cliente.nome.toLowerCase() === nome.toLowerCase())
        console.log("Index" , clienteIndex)
        novoSaldo = extrato.valor + Number(mapSaldo)

        console.log(cpf)
        clientesDB[clienteIndex].saldo = novoSaldo
        clientesDB[clienteIndex].extrato?.push(extrato)
        
                
        res.send(clientesDB)
        
    } catch (error:any) {
        res.status(errorCode || 500).send({ message: error.message })
    }
})
    

//Documentação
//https://documenter.getpostman.com/view/21552015/VUqoRz4c

//Ligando o servidor
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})