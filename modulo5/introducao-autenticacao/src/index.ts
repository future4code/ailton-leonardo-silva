import { app } from "./app"
import { BaseURL, ProjectURL } from "./data/BaseURL";
import UserController from "./endpoints/UserController";


//BaseURL:
// http://localhost:3003/

// --------- INSTANCIANDO AS CLASSES -----------

const userController = new UserController();

// ------------- GET - ENDPOINTS ---------------

app.get("/user/profile", userController.getUserData)

// ------------- POST - ENDPOINTS --------------

app.post("/user/signup", userController.createUser)
app.post("/user/login", userController.login)

// ------------- UPDATE - ENDPOINTS ------------

// ------------- DELETE - ENDPOINTS ------------
