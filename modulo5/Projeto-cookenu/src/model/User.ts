//MODELO DE USUÁRIO

export enum typeUser {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

export interface UserSystem {
  id: string;
  role: typeUser;
}

class User {
  private id: string;
  private name: string;
  private email: string;
  private password: string;
  private role: typeUser;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    role: typeUser
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  //Métodos de acesso aos valores da classe User
  getUserId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getRole() {
    return this.role;
  }
}

export default User;
