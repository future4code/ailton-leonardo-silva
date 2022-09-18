import FollowerData from "../data/FollowerData";
import UserData from "../data/UserData";

class FollowerVerify {
  //***** MÉTODO DE CHECK DE DADOS FOLLOW *****
  async followerCheck(user_id: string, following_id: string) {
    //Instanciando o banco de dados
    const userData = new UserData();
    const followerData = new FollowerData();

    //Cheque do parâmetro user_id
    if (!user_id) {
      throw new Error("O user_id deve ser informado.");
    }
    let result = await userData.fetchUserById(user_id);
    if (!result) {
      throw new Error("Usuário não encontrado.");
    }

    //Cheque do parâmetro following_id
    if (!following_id) {
      throw new Error("O following_id deve ser informado.");
    }
    result = await userData.fetchUserById(following_id);
    if (!result) {
      throw new Error("Usuário não encontrado.");
    }

    //Cheque parâmetros iguais
    if (user_id === following_id) {
      throw new Error("Impossível seguir o próprio usuário.");
    }

    //Cheque se você já segue o usuário
    const alreadyFollowed = await followerData.fetchFollowerById(user_id)
    
    if (alreadyFollowed.length === 0) {
      return { user_id, following_id }
    }
    
    for (let i=0; i < alreadyFollowed.length; i++)  {
      if(alreadyFollowed[i].following_id.includes(following_id)) {
        throw new Error ("Você já segue o usuário.")
      }
      return { user_id, following_id };  
    }
   
  }

  //***** MÉTODO DE DADOS UNFOLLOW *****
  async unfollowCheck(user_id: string, following_id: string) {
    //Instanciando o banco de dados
    const userData = new UserData();
    const followerData = new FollowerData();

    //Cheque do parâmetro user_id
    if (!user_id) {
      throw new Error("O user_id deve ser informado.");
    }
    let result = await userData.fetchUserById(user_id);
    if (!result) {
      throw new Error("Usuário não encontrado.");
    }

    //Cheque do parâmetro following_id
    if (!following_id) {
      throw new Error("O following_id deve ser informado.");
    }
    result = await userData.fetchUserById(following_id);
    if (!result) {
      throw new Error("Usuário não encontrado.");
    }

    //Cheque parâmetros iguais
    if (user_id === following_id) {
      throw new Error("Impossível seguir o próprio usuário.");
    }

    //Cheque se você já segue o usuário
    const alreadyFollowed = await followerData.fetchFollowerById(user_id)
    if(alreadyFollowed.length === 0) {
      throw new Error ("Você não segue o usuário.")
    }

    return { user_id, following_id };
  }


}

export default FollowerVerify;
