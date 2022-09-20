import { Request, Response } from "express";
import FollowerData from "../data/FollowerData";
import UserData from "../data/UserData";
import Follower from "../model/Follower";
import Authenticator from "../services/Authenticator";
import FollowerVerify from "../services/FollowerVerify";
import GenerateId from "../services/GenerateId";

class FollowerController {
  //*********** MÉTODO - CRIAR UM SEGUIDOR   *****************
  async FollowUser(req: Request, res: Response) {
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

      const following_id = req.body.following_id as string;

      //Instancia a classe de banco de dados
      const followerData = new FollowerData();
      const userData = new UserData();

      //Com as informações do token, vamos pegar o Id do usuário para criar o seguidor.
      const fetchingData: any = await userData.fetchUserData(token);
      const user = await userData.fetchUserById(fetchingData.id);
      
      //Checagem dos dados recebidos via body pela classe de verificação
      const followerVerify: any = await new FollowerVerify().followerCheck(user.id, following_id);

      //Instancia a criação de um seguidor
      const follower = new Follower(id, followerVerify.user_id, followerVerify.following_id);

      const answer = await followerData.insertFollowUser(follower);

      //Para melhorar a UX
      const followername = await userData.fetchUserById(
        followerVerify.following_id
      );

      res.status(201).send({ message: `${user.name} passou a seguir ${followername.name}.`});
      
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }

  //*********** MÉTODO - DELETAR UM SEGUIDOR   *****************
  async UnfollowUser(req: Request, res: Response) {
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

      const following_id = req.body.following_id as string;

      //Instancia a classe de banco de dados
      const followerData = new FollowerData();
      const userData = new UserData();

      //Com as informações do token, vamos pegar o Id do usuário para unfollow.
      const fetchingData: any = await userData.fetchUserData(token);
      const user = await userData.fetchUserById(fetchingData.id);
      
      //Checagem dos dados recebidos via body pela classe de verificação
      const unfollowerVerify: any = await new FollowerVerify().unfollowCheck(user.id, following_id);
      // console.log("Unfollowverify", unfollowerVerify)

      const answer = await followerData.deleteFollowUser(unfollowerVerify.user_id,unfollowerVerify.following_id);
      // console.log("answer", answer)

      //Para melhorar a UX
      const unfollowername = await userData.fetchUserById(
        unfollowerVerify.following_id
      );

      res.status(200).send({message: `${user.name} deixou de seguir ${unfollowername.name}.`});
    } catch (error: any) {
      res.status(500).send({ message: error.message });
    }
  }
}

export default FollowerController;
