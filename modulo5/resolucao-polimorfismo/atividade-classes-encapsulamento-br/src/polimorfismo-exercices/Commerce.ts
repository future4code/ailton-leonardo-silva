import { Place } from "./Place";
export class Commerce extends Place {
  constructor(
    private floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }

  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}