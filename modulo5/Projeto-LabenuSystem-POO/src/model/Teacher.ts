class Teacher {
    private id: string;
    private nome: string;
    private email: string;
    private data_nascimento: Date;
    private turma_id: string;
    private especialidade_id: string;
  
    constructor(
      id: string,
      nome: string,
      email: string,
      data_nascimento: Date,
      turma_id: string,
      especialidade_id: string
    ) {
      this.id = id;
      this.nome = nome;
      this.email = email;
      this.data_nascimento = data_nascimento;
      this.turma_id = turma_id;
      this.especialidade_id = especialidade_id;
    }
  
    //Métodos de acesso aos valores da classe Teacher
    getIdTeacher() {
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
    getIdClass() {
      return this.turma_id;
    }
    getIdSpecialty() {
      return this.especialidade_id;
    }
    
  }
  
  export default Teacher;
  