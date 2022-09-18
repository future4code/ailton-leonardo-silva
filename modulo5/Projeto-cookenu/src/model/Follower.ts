//MODELO DE FOLLOWER
  
  class Follower {
    private id: string;
    private user_id: string;
    private following_id: string;
      
    constructor(
      id: string,
      user_id: string,
      following_id: string,
    ) {
      this.id = id;
      this.user_id = user_id;
      this.following_id = following_id;
    }
  
    //Métodos de acesso aos valores da classe Follower
    getId() {
      return this.id
    }

    getUserId() {
      return this.user_id;
    }
      
    getFollowingId() {
      return this.following_id;
    }
  }
  
  export default Follower;
  