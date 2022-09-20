class User {
    private id: string;
    private email: string;
    private password: string;
  
    constructor(
      id: string,
      email: string,
      password: string,

    ) {
      this.id = id;
      this.email = email;
      this.password = password
    }
  
    //Métodos de acesso aos valores da classe Teacher
    getUserId() {
      return this.id;
    }
    
    getEmail() {
      return this.email;
    }
    
    getPassword() {
      return this.password;
    }
    
  }
  
  export default User;
  