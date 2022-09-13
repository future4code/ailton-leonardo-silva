import { Residence } from "./residence";
import { Commerce } from "./commerce";
import { Industry } from "./industry";

export interface Client {
  //Atributos
  name: string;
  registrationNumber: number;
  consumedEnergy: number;

  //Métodos
  calculateBill(): number;
}

export class ClienteResidencial extends Residence implements Client {
  public name: string;
  public registrationNumber: number;
  public consumedEnergy: number;

  constructor(
    name: string,
    registrationNumber: number,
    consumedEnergy: number,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
    this.name = name;
    this.registrationNumber = registrationNumber;
    this.consumedEnergy = consumedEnergy;
  }

  getCep = (): string => {
    return this.cep;
  }
  calculateBill = (): number | any => {
    try {
      const tarifaresidencial = 0.75;
      const calculoconsumo = tarifaresidencial * this.consumedEnergy;
      return `O valor da conta é de R$${calculoconsumo}`;
    } catch (error: any) {
      throw new Error("Deu erro no calculateBill.");
    }
  };
}

export class ClienteComercial extends Commerce implements Client {
  public name: string;
  public registrationNumber: number;
  public consumedEnergy: number;

  constructor(
    name: string,
    registrationNumber: number,
    consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep)
    this.name = name;
    this.registrationNumber = registrationNumber;
    this.consumedEnergy = consumedEnergy;
    this.cnpj = cnpj
  }
  getCep = (): string => {
    return this.cep;
  }

  getCnpj = (): string => {
    return `O seu CNPJ é ${this.cnpj}`;
}
  calculateBill = (): number | any => {
    try {
      const tarifacomercial = 0.53;
      const calculoconsumo = tarifacomercial * this.consumedEnergy;
      return `O valor da conta é de R$${calculoconsumo}`;
    } catch (error: any) {
      throw new Error("Deu erro no calculateBill.");
    }
  };
}

export class ClienteIndustrial extends Industry implements Client {
  public name: string;
  public registrationNumber: number;
  public consumedEnergy: number;

  constructor(
    name: string,
    registrationNumber: number,
    consumedEnergy: number,
    private industryNumber: number | string,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep)
    this.name = name;
    this.registrationNumber = registrationNumber;
    this.consumedEnergy = consumedEnergy;
    this.industryNumber = industryNumber
  }
  getCep = (): string => {
    return this.cep;
  }

  getIndustryNumber = (): number | string => {
    return `O seu número de registro de industria é ${this.industryNumber}`;
}
  calculateBill = ():number|any => {
    try {
      const tarifaindustrial = 0.45;
      const calculoconsumo = tarifaindustrial * this.consumedEnergy;
      return `O valor da conta é de R$${calculoconsumo}`;
    } catch (error: any) {
      throw new Error("Deu erro no calculateBill.");
    }
  };
}
