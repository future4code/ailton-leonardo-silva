import { app } from "./app"
import { BaseURL, ProjectURL } from "./data/BaseURL";
import FollowerController from "./endpoints/FollowerController";
import RecipeController from "./endpoints/RecipeController";
import UserController from "./endpoints/UserController";


//BaseURL:
// http://localhost:3003/

// --------- INSTANCIANDO AS CLASSES -----------

const userController = new UserController();
const recipeController = new RecipeController();
const followerController = new FollowerController()

// ------------- GET - ENDPOINTS ---------------

app.get(`${ProjectURL}/user/profile`, userController.getUserData)
app.get(`${ProjectURL}/user/feed`, userController.getFeed)
app.get(`${ProjectURL}/user/:id`, userController.getUserDataById)
app.get(`${ProjectURL}/recipe/:id`, recipeController.getRecipeData)


// ------------- POST - ENDPOINTS --------------

app.post(`${ProjectURL}/user/signup`, userController.createUser)
app.post(`${ProjectURL}/user/login`, userController.login)
app.post(`${ProjectURL}/recipe`, recipeController.createRecipe)
app.post(`${ProjectURL}/user/follow`, followerController.FollowUser)

// ------------- UPDATE - ENDPOINTS ------------
app.put(`${ProjectURL}/recipe/:id`, recipeController.putRecipeData)
// ------------- DELETE - ENDPOINTS ------------
app.delete(`${ProjectURL}/user/unfollow`, followerController.UnfollowUser)
app.delete(`${ProjectURL}/recipe/:id`, recipeController.deleteRecipeData)
app.delete(`${ProjectURL}/user/:id`, userController.deleteUser)