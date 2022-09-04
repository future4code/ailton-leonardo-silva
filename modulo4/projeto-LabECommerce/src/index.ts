import { app } from "./app"
import { BaseURL } from "./data/BaseURL";
import getAllUsers from "./endpoints/getAllUsers";
import getAllProducts from "./endpoints/getAllProducts";
import getPurchaseByUserId from "./endpoints/getPurchaseByUserId";
import createUser from "./endpoints/createUser";
import createProduct from "./endpoints/createProduct";
import createPurchase from "./endpoints/createPurchase";
import eraseUser from "./endpoints/eraseUser";
import putUser from "./endpoints/putUser";


//BaseURL:
// http://localhost:3003/LabECommerce

// ------------- GET - ENDPOINTS ---------------

//Endpoint para buscar todos os usuários
app.get(`/users`, getAllUsers)

//Endpoint para buscar todos os produtos
app.get(`/products`, getAllProducts)

//Endpoint para buscar todos os produtos
app.get(`/users/:user_id/purchases`, getPurchaseByUserId)

// ------------- POST - ENDPOINTS --------------

//Endpoint de criação de usuário
app.post(`/users`, createUser)

//Endpoint de criação de produtos
app.post(`/products`, createProduct)

//Endpoint de criação de compras
app.post(`/purchases`, createPurchase)

// ------------- UPDATE - ENDPOINTS ------------

//Endpoint de edição de usuários
app.put("/user/update/:id", putUser)

// ------------- DELETE - ENDPOINTS ------------

//Endpoint de exclusão de usuário
app.delete("/user/delete/:id", eraseUser)