import { Request, Response } from "express";
import FollowerData from "../data/FollowerData";
import RecipeData from "../data/RecipeData";
import UserData from "../data/UserData";
import Recipe from "../model/Recipe";
import RecipeUpdate from "../model/RecipeUpdate";
import { typeUser } from "../model/User";
import Authenticator from "../services/Authenticator";
import FormatDate from "../services/FormatDate";
import GenerateId from "../services/GenerateId";
import RecipeVerify from "../services/RecipeVerify";

class RecipeController {
  //*********** MÉTODO - CRIAR UMA RECEITA   *****************
  async createRecipe(req: Request, res: Response) {
    try {
      //Checagem do Token de segurança do endpoint
      const token = req.headers.authorization as string;
      if (!token) {
        throw new Error("O token de segurança precisa ser informado.");
      }
      const authenticator = new Authenticator().verifyToken(token);
      if (!authenticator) {
        throw new Error("Usuário inválido.");
      }

      //Criando um ID único
      const id = new GenerateId().createId();

      const date = new FormatDate();
      const createdAtUS: any = date.dateBrToUs();
      const createdAtBR: any = date.dateUsToBr();

      const { title, description } = req.body;

      //Checagem dos dados recebidos via body pela classe de verificação
      const recipeVerify = await new RecipeVerify().recipeCheck(
        title,
        description
      );

      //Instancia a classe de banco de dados
      const recipeData = new RecipeData();
      const userData = new UserData();

      //Com as informações do token, vamos pegar o Id do usuário para cadastrar na receita.
      const fetchingData: any = await userData.fetchUserData(token);
      const user = await userData.fetchUserById(fetchingData.id);
      if (!user.id) {
        throw new Error("Usuário não encontrado.");
      }

      //Instancia uma receita
      const recipe = new Recipe(
        id,
        recipeVerify.title,
        recipeVerify.description,
        createdAtUS.date,
        user.id
      );

      const answer = await recipeData.insertRecipe(recipe);

      res.status(201).send({
        id,
        title: recipeVerify.title,
        description: recipeVerify.description,
        createdAt: createdAtBR.date,
        user_id: user.id,
      });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  //*********** MÉTODO - BUSCAR OS DADOS DE UMA RECEITA   ****************

  async getRecipeData(req: Request, res: Response) {
    try {
      //Checagem do Token de segurança do endpoint
      const token = req.headers.authorization as string;
      if (!token) {
        throw new Error("O token de segurança precisa ser informado.");
      }
      const authenticator = new Authenticator().verifyToken(token);
      if (!authenticator) {
        throw new Error("Usuário inválido.");
      }

      //Instancia a classe de checagem de receitas
      const id = req.params.id as string;
      const recipeVerify = await new RecipeVerify().recipeIdCheck(id);

      //Instancia a classe de banco de dados
      const recipeData = new RecipeData();
      const userData = new UserData();

      //Buscando os dados da receita
      const fetchingData: any = await recipeData.fetchRecipeById(
        recipeVerify.id
      );

      const date = new FormatDate();
      const createdAtBR = date.dateUsToBrWithData(fetchingData.createdAt);

      //Buscando os dados do usuário
      const user: any = await userData.fetchUserData(token);
      const userID = await userData.fetchUserById(user.id);

      //Iniciando os checks se o usuário é o dono da receita, ou se ele segue o dono.
      if (fetchingData.user_id !== userID.id) {
        const followerData = new FollowerData();
        const checkData = await followerData.fetchFollowerById(userID.id);
        if (checkData.length === 0) {
          throw new Error("Você não segue esse usuário.");
        }
      }
      res.status(200).send({
        id: fetchingData.id,
        title: fetchingData.title,
        description: fetchingData.description,
        createdAt: createdAtBR.dateFormatted,
      });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  //*********** MÉTODO - ATUALIZAR UMA RECEITA   ****************

  async putRecipeData(req: Request, res: Response) {
    try {
      //Checagem do Token de segurança do endpoint
      const token = req.headers.authorization as string;
      if (!token) {
        throw new Error("O token de segurança precisa ser informado.");
      }
      const authenticator = new Authenticator().verifyToken(token);
      if (!authenticator) {
        throw new Error("Usuário inválido.");
      }

      const id = req.params.id as string;
      if (id === ":id") {
        throw new Error ("O id da receita deve ser informado.")
      }

      //Instancia a classe de checagem de receitas
      const recipeVerifyId = await new RecipeVerify().recipeIdCheck(id);

      const { title , description } = req.body
      const recipeVerify = await new RecipeVerify().recipeCheck(title, description)

      //Instancia a classe de banco de dados
      const recipeData = new RecipeData();
      const userData = new UserData();

      //Buscando os dados da receita
      const fetchingData: any = await recipeData.fetchRecipeById(recipeVerifyId.id);

      //Instancia um update de receita
      const recipeUpdate = new RecipeUpdate(
        recipeVerify.title,
        recipeVerify.description
      );
     
      const date = new FormatDate();
      const createdAtBR = date.dateUsToBrWithData(fetchingData.createdAt);
      
      //Buscando os dados do usuário
      const user: any = await userData.fetchUserData(token);
      const userID = await userData.fetchUserById(user.id);
      
      //Iniciando os checks para saber se o usuário é o dono da receita.
      //A implementação de edição somente será feita pelo dono da receita.
      if (fetchingData.user_id === userID.id) {
      
      const answer: any = await recipeData.updateRecipe(recipeVerifyId.id, recipeUpdate);

        res.status(200).send({ 
          id: fetchingData.id,
          title: recipeVerify.title,
          description: recipeVerify.description,
          createdAt: createdAtBR.dateFormatted,
        });  
      } else {
        throw new Error ("Você não pode editar a receita de outro usuário.")
      }
      
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

//*********** MÉTODO - DELETAR UMA RECEITA   ****************

async deleteRecipeData(req: Request, res: Response) {
  try {
    //Checagem do Token de segurança do endpoint
    const token = req.headers.authorization as string;
    if (!token) {
      throw new Error("O token de segurança precisa ser informado.");
    }
    const authenticator = new Authenticator().verifyToken(token);
    if (!authenticator) {
      throw new Error("Usuário inválido.");
    }

    //Instancia a classe de checagem de receitas
    const id = req.params.id as string;
    
    if (id === ":id") {
      throw new Error ("O id da receita deve ser informado.")
    }
    const recipeVerifyId = await new RecipeVerify().recipeIdCheck(id);
    
    //Instancia a classe de banco de dados
    const recipeData = new RecipeData();
    const userData = new UserData();

    //Buscando os dados da receita
    const fetchingData: any = await recipeData.fetchRecipeById(recipeVerifyId.id);

    //Buscando os dados do usuário
    const user: any = await userData.fetchUserData(token);
    const userID = await userData.fetchUserById(user.id);
    
    //Iniciando os checks para saber se o usuário é o dono da receita.
    //A deleção será feita pelo dono da receita ou por um ADMIN.
    if (fetchingData.user_id === userID.id || user.role === typeUser.ADMIN) {
    
    const answer: any = await recipeData.deleteRecipe(recipeVerifyId.id);

      res.status(200).send({message:"A receita foi deletada com sucesso."});  
    } else {
      throw new Error ("Você não pode deletar a receita de outro usuário.")
    }
    
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
}





}

export default RecipeController;
