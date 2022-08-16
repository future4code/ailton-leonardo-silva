//Importações do Express
import express, { Express , Request, Response } from "express";
import cors from "cors";
import { todo , todos } from "./data"

//Aula de Aprofundamento Express
//Middleware
const app:Express = express()
app.use(express.json())
app.use(cors())

//Exercício 1 - Teste de Endpoint - OK
app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})

//Exercício 2 - No data.ts - OK

//Exercício 3 - No data.ts - OK

//Exercício 4 - Retorna os Todos, filtrando se foram completados.
app.get("/todos/done", (req:Request, res:Response) => { 
    const filterTodos = todos.filter((completed) => {
        return completed.completed 
    })
    
    res.status(200).send(filterTodos)
})

//Exercício 5 - Criando um novo Todo.
app.post("/todos/create", (req:Request, res:Response) => { 
    const {userId, id, title} = req.body
    
    const newTodo:todo = { userId, id, title, completed: false }

    todos.push(newTodo)
    res.status(201).send(newTodo)
    console.log(todos)

    })

//Exercício 6 - Mudando o status das tarefas
app.put("/todos/:userId/:id", (req: Request, res: Response) =>{
    const userId = req.params.userId
    const id = req.params.id

    //Filtrando o usuario e em sequencia fazendo o filtro do Todo
    const filteredUser = todos.filter((user) =>{
        return user.userId === Number(userId)
    }).filter((todoId) =>{
        return todoId.id === Number(id)
    })

    //Lógica da alteração da tarefa completada
    //Usando uma variável auxiliar para fugir do conflito com o tipo Never
    const changeTaskStatus:todo[] = filteredUser.filter((task) =>{
        let aux:boolean = task.completed 
        if (aux) {
            return task.completed = false
        } else {
            return task.completed = true
        } 
    
    })
    
    res.send(changeTaskStatus)
    console.log(todos)
})

//Exercício 7 - Deletando uma tarefa
app.delete("/deleteTodo/:userId/:id", (req: Request, res: Response) =>{
    const userId = req.params.userId
    const taskId = req.params.id
    
    //Filtrando o usuario e a tarefa em sequencia.
    const filteredUser = todos.filter((user) =>{
        return user.userId === Number(userId)
    }).filter((task) => {
        return task.id !== Number(taskId)
    })

    res.send(filteredUser)
    console.log(filteredUser)
})

//Exercício 8 - 
app.get("/todos/:userId", (req: Request, res: Response) =>{
    const userId = req.params.userId

    const filteredUsers = todos.filter((user) =>{
        return user.userId === Number(userId)
    })
    res.send(filteredUsers)
})

//Exercício 9

//Doucmentação
// https://documenter.getpostman.com/view/21552015/VUjTmPf5


//Ligando o servidor
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})