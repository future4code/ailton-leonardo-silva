export abstract class Place {
      constructor(
        protected cep: string) 
        {}
        public getCep(): string {
          return this.cep;
    }
  }

// não é possivel criar um objeto de uma classe abstrata 
//"Cannot create an instance of an abstract class"
  //const newPLace = new Place()