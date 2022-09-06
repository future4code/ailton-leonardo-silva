export abstract class Place {
  constructor(protected cep: string) {}

  public getCep(): string {
    return this.cep;
  }
}
//Não é possivel criar uma instância de uma classe abstrata.
//const newPlace = new Place()