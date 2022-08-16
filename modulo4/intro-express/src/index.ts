//Importações do Express
import express, { Express , Request, Response } from "express";
import cors from "cors"
import { users , user , post } from "./data"

//Middleware
const app:Express = express()
app.use(express.json())
app.use(cors())

//Exercício 1
app.get("/", (req:Request, res:Response) => {
    res.status(200).send("Endpoint funcionando.")
})

//Exercício 2 e 3
//https://jsonplaceholder.typicode.com/users

// type user = {
//     userId: number,
//     name: string,
//     phone: number,
//     email: string,
//     website: string
// }

//Passando o type e o array para data.ts

//Exercício 4
//Buscando todos os usuários
app.get("/users", (request, response) => {
    response.send(users)
    console.log(users)
})

//Exercício 5

// export type posts = {
//     userId: number,
//     postId: number,
//     title: string,
//     body: string
// }

// Copiado para o data.ts

//Exercício 6
//Até o momento do curso só vimos APIs encadeando POSTS e COMENTÁRIOS, acho que para facilitar a passagem dos params.
//Tipagem no data.ts

//Exercício 7

//Pegando todos os POSTS

app.get("/users/posts", (request, response) => {

    //Map para pegar os posts
    const mapPosts = users.map((posts) => {
        return posts.posts
    })

    response.send(mapPosts)
})

//Exercício 8

//Buscando todos os posts do usuário

app.get("/users/:userId", (request, response) => {
    const userId = request.params.userId
    // Filtro para pegar o usuario
    const getPosts:user[] = users.filter((users) => {
        return users.userId === Number(userId)
    })
    //Map para pegar os posts
    const mapPosts = getPosts.map((posts) => {
        return posts.posts
    })

    response.send(mapPosts)
})

//Exercício 9 - Apagar um Post
app.delete("/deleteUser/:userId/posts/:postId", (request, response) => {
    const userId = request.params.userId
    const postId = request.params.postId
    // Filtro para pegar o usuario
    const getPosts:user[] = users.filter((users) => {
        return users.userId === Number(userId)
    })
    //Map para pegar os posts
    const mapPosts = getPosts.map((posts) => {
        return posts.posts
    })
    // Filtro para deletar o post - Aqui está dando erro
    const deletePost = mapPosts.filter((posts:any) => {
        return posts.postId !== Number(postId)
    })
    response.status(200).send(deletePost)
    console.log(deletePost)
})


//Exercício 10 - Apagar um usuário
app.delete("/deleteUser/:userId", (request, response) => {
    const userId = request.params.userId
    // Filtro para deletar o usuario
    const deleteUser:user[] = users.filter((users) => {
        return users.userId !== Number(userId)
    })
    response.status(200).send(deleteUser)
})



//Ligando o servidor
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})


