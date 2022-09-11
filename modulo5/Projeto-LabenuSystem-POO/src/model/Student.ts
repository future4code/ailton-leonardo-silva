class Student {
  private id: string;
  private nome: string;
  private email: string;
  private data_nascimento: Date;
  private password: string;
  private turma_id: string;
  private hobby_id: string;

  constructor(
    id: string,
    nome: string,
    email: string,
    data_nascimento: Date,
    password: string,
    turma_id: string,
    hobby_id: string
  ) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.data_nascimento = data_nascimento;
    this.password = password;
    this.turma_id = turma_id;
    this.hobby_id = hobby_id;
  }

  //Métodos de acesso aos valores da classe Student
  getIdStudent() {
    return this.id;
  }
  getName() {
    return this.nome;
  }
  getEmail() {
    return this.email;
  }
  getBirthDate() {
    return this.data_nascimento;
  }
  getPassword() {
    return this.password;
  }
  getIdClass() {
    return this.turma_id;
  }
  getIdHobby() {
    return this.hobby_id;
  }
  
}

export default Student;
