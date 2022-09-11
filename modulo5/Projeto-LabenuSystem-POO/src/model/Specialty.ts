class Specialty {
    private id: string;
    private nome: string;
  
    constructor(id: string, nome: string) {
      this.id = id;
      this.nome = nome;
    }
  
    //Métodos de acesso aos valores da classe Specialty
    getIdSpecialty() {
      return this.id;
    }
    getName() {
      return this.nome;
    }
  }
  
  export default Specialty;