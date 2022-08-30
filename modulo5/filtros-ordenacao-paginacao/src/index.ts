import {app} from "./app"
import getAllUsers from "./endpoints/getAllUsers";
import getAllUsersOffSet from "./endpoints/getAllUsersOffSet";
import getUserByName from "./endpoints/getUserByName";
import getUserByType from "./endpoints/getUserByType";

//Exercício 1A
app.get("/getUserByName", getUserByName)

//Exercício 1B
app.get("/getUserByType/:type", getUserByType)

//Exercício 2
app.get("/getAllUsers", getAllUsers)

//Exercícios 3 e 4
app.get("/getAllUsersOffSet", getAllUsersOffSet)

