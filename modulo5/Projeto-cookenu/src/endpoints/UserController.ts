import { Request, Response } from "express";
import FollowerData from "../data/FollowerData";
import RecipeData from "../data/RecipeData";
import UserData from "../data/UserData";
import User, { typeUser } from "../model/User";
import Authenticator from "../services/Authenticator";
import { DataVerify } from "../services/DataVerify";
import FormatDate from "../services/FormatDate";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

class UserController {

  //*********** MÉTODO - CRIAR UM USUÁRIO   *****************
  async createUser(req: Request, res: Response) {
    try {
      //Criando um ID único
      const id = new GenerateId().createId();
      
      const { name, email, password, role } = req.body;
      
      //Checagem dos dados recebidos via body pela classe de verificação
      const userVerify = await new DataVerify().dataCheck(name, email, password, role)
            
      //Gerando o hash da senha
      const hashPassword = await new HashManager().hashPassword(userVerify.password);

      //Instancia a classe de banco de dados
      const userData = new UserData();
      
      //Instancia um usuário
      const user = new User(id, userVerify.name, userVerify.email, hashPassword, userVerify.role);
      
      const answer = await userData.insertUser(user);

      const userToken = { id, role };
      const token = new Authenticator().generateToken(userToken);

      res.status(201).send({ message: answer, token });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  //************** MÉTODO - FUNÇÃO DE LOGIN   ****************
  async login(req: Request, res: Response) {
    try {
      const email: string = req.body.email.toLowerCase();
      const password: string = req.body.password;

      //Checagem dos dados recebidos via body pela classe de verificação
      const userVerify = await new DataVerify().checkLogin(email, password)

      //Instanciando o Banco de Dados
      const userData = new UserData()
      const fetchData = await userData.selectUserByEmail(userVerify.email)

      //Criando o token de acesso para o usuário
      const token = new Authenticator().generateToken({
        id: fetchData.id,
        role: fetchData.role,
      });

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  //*********** MÉTODO - BUSCAR OS DADOS DO USUÁRIO   ****************

  async getUserData(req: Request, res: Response) {
    try {
      //Checagem do Token de segurança do endpoint
      const token = req.headers.authorization as string;
      if (!token) {
        throw new Error ("O token de segurança precisa ser informado.")
      }
      const authenticator = new Authenticator().verifyToken(token);
      if (!authenticator) {
        throw new Error("Usuário inválido.");
      }

      //Instancia a classe de banco de dados
      const userData = new UserData();

      const fetchingData: any = await userData.fetchUserData(token);
      const user = await userData.fetchUserById(fetchingData.id);
      
      if (user.role === typeUser.ADMIN) {
        res.status(200).send({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
      })
      } else {
        res.status(200).send({
          id: user.id,
          name: user.name,
          email: user.email,
      })
      }
      ;
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  //*********** MÉTODO - BUSCAR OS DADOS DO USUÁRIO POR ID ****************

  async getUserDataById(req: Request, res: Response) {
    try {
      //Checagem do Token de segurança do endpoint
      const token = req.headers.authorization as string;
      if (!token) {
        throw new Error ("O token de segurança precisa ser informado.")
      }
      const authenticator = new Authenticator().verifyToken(token);
      if (!authenticator) {
        throw new Error("Usuário inválido.");
      }

      let id = ""
      if (req.params.id === ':id') {
        throw new Error ("O id deve ser informado.")
      } else {
        id = req.params.id as string
      }
      
      //Instancia a classe de banco de dados
      const userData = new UserData();
      const user = await userData.fetchUserById(id);

      if (!user) {
        throw new Error ("O usuário não foi encontrado.")
      }
      
      //Checando se o usuário é NORMAL ou ADMIN
      const fetchingData: any = await userData.fetchUserData(token);
      
      
      if (fetchingData.role === typeUser.ADMIN) {
        res.status(200).send({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
      })
      } else {
        res.status(200).send({
          id: user.id,
          name: user.name,
          email: user.email,
      })
      }
      ;
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  //*********** MÉTODO - FEED DE RECEITAS ****************

  async getFeed(req: Request, res: Response) {
    try {
      //Checagem do Token de segurança do endpoint
      const token = req.headers.authorization as string;
      if (!token) {
        throw new Error ("O token de segurança precisa ser informado.")
      }
      const authenticator = new Authenticator().verifyToken(token);
      if (!authenticator) {
        throw new Error("Usuário inválido.");
      }
            
      //Instancia a classe de banco de dados
      const userData = new UserData();
      const recipeData = new RecipeData();
      const followerData = new FollowerData();
      const formatDate = new FormatDate()

      //Busca o ID do usuário
      const user: any = await userData.fetchUserData(token);
            
      //Com o ID, vou buscar as pessoas que ele segue.
      const followingusers: any = await followerData.fetchFollowerById(user.id) 
      //No map vou pegar todas as IDs de quem o usuário segue
      const mapFollowingusers: any = followingusers.map((result:any) => {
        return result.following_id;
      });
      
      let recipes: any
      let result: any = [];
      //Montando a exibição formatada
      
      for (let i=0; i < mapFollowingusers.length; i++) {
        recipes = await recipeData.fetchAllUserRecipes(mapFollowingusers[i])
        
        if (recipes.length !== 0) {
          
          for (let soma=0 ; soma < recipes.length; soma++)
          recipes[soma].createdAt = formatDate.dateUsToBrWithData(recipes[soma].createdAt).dateFormatted
          
          
          result.push(recipes);
        
        }
      }
      
      res.status(200).send({recipes: result})
      
            
      
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  //*********** MÉTODO - DELETAR UM USUÁRIO   ****************

async deleteUser(req: Request, res: Response) {
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
      throw new Error ("O id do usuário deve ser informado.")
    }
    
    //Instancia a classe de banco de dados
    const userData = new UserData();
    const recipeData = new RecipeData();
    const followerData = new FollowerData()
    
    //Buscando os dados do usuário
    const user: any = await userData.fetchUserData(token);
    const userToBeDeleted = await userData.fetchUserById(id)
    console.log(userToBeDeleted)
    if (!userToBeDeleted) {
      throw new Error ("Usuário não encontrado.")
    }

    if (userToBeDeleted.id === user.id) {
      throw new Error ("Erro de usuário.")
    }
    
    //Iniciando os checks para saber se o usuário é um ADMIN.
    if (user.role === typeUser.ADMIN) {
    
    const answer3: any = await followerData.deleteUserAndFollowers(id);
    const answer2: any = await recipeData.deleteAllRecipesFromUser(id);
    const answer: any = await userData.deleteUser(id);

      res.status(200).send({message:"Usuário foi deletado(a) com sucesso."});  
    } else {
      throw new Error ("Você não tem permissão para deletar um usuário.")
    }
    
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
}


}

export default UserController;
