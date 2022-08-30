//Importações do Express
import express, { Express , request, Request, Response } from "express";
import cors from "cors";
import { user, users, UserType } from "./data"

//Aula de Aprofundamento Express
//Middleware
const app:Express = express()
app.use(express.json())
app.use(cors())

//Teste de Endpoint - OK
app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})

//Exercício 1
//A) GET
//B) A entidade será "/users"
app.get("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        if (!users) {
            errorCode = 404
            throw new Error("Usuários não encontrados.")
        }
        if (!users.length) {
            errorCode = 401
            throw new Error("Usuários não encontrados.")
        }
        res.send(users)
    } catch (error:any) {
        res.status(errorCode || 500).send({ message: error.message })
    }
})

//Exercício 2
app.get("/usersType", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const type: UserType = req.query.type as UserType
        
        if (!users) {
            errorCode = 404
            throw new Error("Usuários não encontrados.")
        }
        if (!users.length) {
            errorCode = 401
            throw new Error("Usuários não encontrados.")
        }
        
        const filterType:user[] | undefined = users.filter((user) => {
            return user.type === type
        })
        
        if(!filterType.length) {
            errorCode = 404
            throw new Error(`Usuários não encontrados do tipo ${type}.`)
        }
        

        res.send(filterType)
    } catch (error:any) {
        res.status(errorCode || 500).send({ message: error.message })
    }
})

//Exercício 3
app.get("/usersName", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name: string = req.query.name as string
        
        if (!users) {
            errorCode = 404
            throw new Error("Usuários não encontrados.")
        }
        if (!users.length) {
            errorCode = 401
            throw new Error("Usuários não encontrados.")
        }
        
        const filterName:user[] | undefined = users.filter((user) => {
            return user.name === name
        })
        
        if(!filterName.length) {
            errorCode = 404
            throw new Error(`Usuários não encontrados com o nome ${name}.`)
        }
        

        res.send(filterName)
    } catch (error:any) {
        res.status(errorCode || 500).send({ message: error.message })
    }
})

//Exercício 4 - POST
app.post("/createuser", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { id , name , email , type, age } = req.body
        
        if (!users) {
            errorCode = 404
            throw new Error("Usuários não encontrados.")
        }
        if (!users.length) {
            errorCode = 401
            throw new Error("Usuários não encontrados.")
        }
       
        const newUser: user = { id , name , email , type, age } 

        if(!id || !name || !email || !type || !age){
            errorCode = 422
            throw new Error("Algum campo nao foi preenchido corretamente.")
        }
        
        users.push(newUser)

        res.status(201).send(newUser)

    } catch (error:any) {
        res.status(errorCode || 500).send({ message: error.message })
    }
})

// Exercício 5 - Edição do nome de usuário
app.put("/putuser/:id", (req:Request, res:Response) =>{
    try {
        const id:number = Number(req.params.id) as number
        const name:string = req.body.name as string

        if (!id) {
            res.statusCode = 401
            throw new Error(`Usuário não encontrado.`)
        }
        
        //Filtrando o usuário
        const indexUser: any = users.findIndex((user) =>{
            return user.id === id
        })

        if (!indexUser) {
            res.statusCode = 401
            throw new Error(`Usuário não encontrado.`)
        }

        //Fazendo a edição do nome do usuário
        users[indexUser].name = name
        res.send(users)
        
    } catch (error:any) {
        res.status(res.statusCode || 500).send({ message: error.message })
    }

} )

// Exercício 6

app.patch("/patchuser", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { id , name , email , type, age } = req.body
        
        if (!users) {
            errorCode = 404
            throw new Error("Usuários não encontrados.")
        }
        if (!users.length) {
            errorCode = 401
            throw new Error("Usuários não encontrados.")
        }
       
        const newUser: user = { id , name , email , type, age } 

        if(!id || !name || !email || !type || !age){
            errorCode = 422
            throw new Error("Algum campo nao foi preenchido corretamente.")
        }
        
        users.push(newUser)

        res.status(201).send(newUser)

    } catch (error:any) {
        res.status(errorCode || 500).send({ message: error.message })
    }
})

//Exercício 7 - Deletar um usuário
app.delete("/users/:id", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const id: number = Number(req.params.id) as number
        
        if (!id) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }
        if (!users.length) {
            errorCode = 401
            throw new Error("Usuário não encontrado.")
        }
        
        const filterId: user[] = users.filter((userid) => {
            return userid.id !== id
        })
        
        if (!filterId.length) {
            errorCode = 404
            throw new Error(`Usuário não encontrado.`)
        }
        

        res.status(204).send(filterId)
    } catch (error:any) {
        res.status(errorCode || 500).send({ message: error.message })
    }
})


//Documentação



//Ligando o servidor
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})