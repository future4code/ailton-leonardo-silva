import {app} from "./app"

import getCEP from "./endpoints/getCEP";
import postCEP from "./endpoints/postCEP";

//Exercício 1 - Endpoint de chamada
app.get("/getCEP/:CEP", getCEP)

//Exercício 3 - Inserção dos dados do CEP na tabela
app.post("/postCEP/:CEP",postCEP)

