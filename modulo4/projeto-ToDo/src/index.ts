//Importações
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import getTaskAndYourResponsibles from './endpoints/getTaskAndYourResponsibles'
import getAllUsers from './endpoints/getAllUsers'
import createUser from "./endpoints/postUser";
import getUserbyId from "./endpoints/getUserById";
import putUser from "./endpoints/putUser";
import putTask from "./endpoints/putTask";
import postTask from "./endpoints/postTask";
import getUserById5 from "./endpoints/getUserById5";
import getUserTasksById from "./endpoints/getUserTasksById";
import getUserByQuery from "./endpoints/getUserByQuery";
import postTaskResponsible from "./endpoints/postTaskResponsible";
import getResponsibleTaskbyID from "./endpoints/getResponsibleTaskById";

//Middleware
const app: Express = express();
app.use(express.json());
app.use(cors());

// *** Projeto ToDo *** //

// Desafio 6
app.get("/Todo/Users/All", getAllUsers)

// Tarefa 1 - Criar um novo usuário
app.post("/Todo/Users", createUser)

// Tarefa 2 - Pegar um usuário pela ID
app.get("/Todo/Users/:id", getUserbyId) 

// Tarefa 3 - Atualizar Usuário
app.put("/Todo/Users/:id", putUser)

// Tarefa 4 - Criar Tarefa
app.post("/Todo/Task", postTask)

// Tarefa 5 - Pegar a tarefa pela ID
app.get("/Todo/Task/:id", getUserById5);

// Desafio 7 - Pegar as Tarefa feitas por um usuário pela ID
app.get("/Todo/Tasks", getUserTasksById);

// Desafio 8 - Pegar um usuário pela Query nickname ou email
app.get("/Todo/Users/", getUserByQuery);

// Desafio 9 - Criar responsável pela tarefa
app.post("/Todo/Task/Responsible", postTaskResponsible);

// Desafio 10 - Pegar os usuário responsáveis por uma tarefa pela ID
app.get("/Todo/Task/:id/responsible", getResponsibleTaskbyID);

// Desafio 11 - Consulta para resolução (Mais difícil)
app.get("/Todo/Task/:id/responsiblesTask", getTaskAndYourResponsibles)

// Desafio 12 - Atualizar status de uma tarefa
app.put("/Todo/Task/Status/:id", putTask)


//Documentação

//https://documenter.getpostman.com/view/21552015/VUxKSUdP

//Ligando o servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
