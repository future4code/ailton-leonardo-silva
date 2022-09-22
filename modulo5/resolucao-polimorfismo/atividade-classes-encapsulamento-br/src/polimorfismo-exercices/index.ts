import {Client} from "./Client"
import { Residence } from "./Residence"
import {ResidentialClient} from "./ResidentialClient"
console.log("[Polimorfismo]")

// Para o exercício de prática de polimorfismo vamos fazer um sistema para auxiliar o cálculo de contas de energia elétrica para uma concessionária famosa. Basicamente, o custeamento depende do tipo do cliente. O valor base de cada kWh (unidade de consumo de energia) é R$0.75. O **Cliente Residencial** paga a tarifa cheia (ou seja, R$0.75). O **Cliente Comercial** possui um desconto de 30% do valor total (ou seja, paga R$0.53). Por fim, para o **Cliente Industrial,** há um desconto de 40% do valor total (ou seja, paga R$0.45) mais um valor fixo de R$100,00 por máquina usada na fábrica.

// Já deixamos prontos 5 entidades desse sistema: **Place**, **Client**, **Industry**, **Commerce** e **Residence**.

//Exercicio 1

const cliente:Client = {
    name :"Bruno",
    registrationNumber:1,
    consumedEnergy:100,

    calculateBill:()=>{
        return 10
    }

  }
  console.log(cliente.calculateBill())

  //Exercicio 2 

  export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }
// não é possivel criar um objeto de uma classe abstrata 
//"Cannot create an instance of an abstract class"
  //const newPLace = new Place()


  //Exercicio 3 

  const casa :Residence = new Residence(2,"44.222-600")
  // acesso ao cep bem como ao metodo getDwellersQuantity
  console.log(casa.getCep());
  console.log(casa.getDwellersQuantity())

  //Exercicio 4

  // a) um método para pegar o cpf e um método para calcular o consumo de energia



// Exercício 4 
// a) Método para pegar o cpf e um método para calcular o consumo de energia

const residential = new ResidentialClient("Nome do residencial",2,100,"123.123.123-12",10,"40.555-444")
console.log(residential.getCpf())
console.log(residential.calculateBill())

// Exercício 5 
