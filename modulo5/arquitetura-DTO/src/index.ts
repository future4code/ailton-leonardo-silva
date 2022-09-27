import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"
import { UserController } from './controller/UserController'
import { userRouter } from './router/userRouter'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

app.use("/users", userRouter)


app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

