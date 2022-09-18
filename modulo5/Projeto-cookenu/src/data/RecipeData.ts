import * as jwt from "jsonwebtoken";
import BaseDataBase from "./BaseDataBase";
import Authenticator from "../services/Authenticator";
import Recipe from "../model/Recipe";
import RecipeUpdate from "../model/RecipeUpdate";

class RecipeData extends BaseDataBase {
  async insertRecipe(recipe: Recipe): Promise<void> {
    await this.getConnection()
      .insert({
        id: recipe.getRecipeId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        createdAt: recipe.getCreatedAt(),
        user_id: recipe.getUserId()
      })
      .into("Recipes_Projeto_Cookenu");
  }

  async fetchRecipeById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from("Recipes_Projeto_Cookenu")
      .where({ id });

    return result[0];
  }

  async fetchAllUserRecipes(id: string): Promise<any> {
    const result = await this.getConnection().raw(`
    SELECT Recipes_Projeto_Cookenu.id as 'id', title, description, createdAt,
      Users_Projeto_Cookenu.id as 'userId', name as 'userName'
    FROM Recipes_Projeto_Cookenu
    JOIN Users_Projeto_Cookenu
    ON Recipes_Projeto_Cookenu.user_id = Users_Projeto_Cookenu.id
    WHERE user_id LIKE '${id}'
    ORDER BY createdAt;
  `);

    return result[0];
  }

  async updateRecipe(id:string , recipe: RecipeUpdate): Promise<void> {
    await this.getConnection()
      .update({
        title: recipe.getTitle(),
        description: recipe.getDescription(),
      })
      .into("Recipes_Projeto_Cookenu")
      .where({ id });
  }

    //********** DELEÇÃO DE RECEITA DO BANCO DE DADOS **********
    async deleteRecipe(id:string): Promise<void> {
      await this.getConnection().raw(`
      DELETE FROM Recipes_Projeto_Cookenu WHERE id LIKE '${id}'
    `);
    }

    //********** DELEÇÃO DE RECEITA DO BANCO DE DADOS **********
    //*** USADO QUANDO UM USUÁRIO É DELETADO DO BD ***
    async deleteAllRecipesFromUser(id:string): Promise<void> {
      await this.getConnection().raw(`
      DELETE FROM Recipes_Projeto_Cookenu WHERE user_id LIKE '${id}'
    `);
    }    

}

export default RecipeData;
