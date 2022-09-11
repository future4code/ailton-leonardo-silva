class Hobby {
  private id: string;
  private nome: string;

  constructor(id: string, nome: string) {
    this.id = id;
    this.nome = nome;
  }

  //Métodos de acesso aos valores da classe Hobby
  getIdHobby() {
    return this.id;
  }
  getName() {
    return this.nome;
  }
}

export default Hobby;
