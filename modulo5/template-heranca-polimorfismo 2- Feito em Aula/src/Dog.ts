export class Dog {
  name: string;
  weight: number;

  constructor(name: string, weight: number) {
    this.name = name;
    this.weight = weight;
  }

  bark(): void {
    console.log("au au 🐶");
  }

  eat(quantity: number): void {
    console.log("the dog has eaten " + quantity);
  }
}