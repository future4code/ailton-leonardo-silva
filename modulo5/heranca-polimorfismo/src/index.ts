// ---------- 
import { User } from "./user"
import { Customer } from "./customer"
import { Client , ClienteResidencial , ClienteComercial, ClienteIndustrial } from "./client"
import { Place } from "./place"
import { Residence } from "./residence"
import { Commerce } from "./commerce"
import { Industry } from "./industry"


const usuario:User = new User("001", "leonardo@gmail.com","Leonardo", "Laura123")
// console.log(usuario)

const consumidor:Customer = new Customer("001", "raquel@gmail.com","Raquel", "Laura123", "1212456846")
// console.table(consumidor)
consumidor.getCreditCard

// console.log(usuario.introduceYourself())
// console.log(consumidor.introduceYourself())

// ----------- Polimorfismo --------------------
// Exercício 1
// const cliente1: ClienteResidencial = {
//     name: "Leo",
//     registrationNumber: 1,
//     consumedEnergy: 100,
      
//     calculateBill: () => {
//       return 2;
//     },
//   };

// console.log(cliente1.calculateBill())


  //Exercicio 3 

  const casa :Residence = new Residence(3,"20735-130")
  
  // console.log(casa.getCep());
  // console.log(casa.getResidentsQuantity())

  const comercio :Commerce = new Commerce(5,"20735-130")
  
  // console.log(comercio.getCep());
  // console.log(comercio.getFloorsQuantity())

  const industria :Industry = new Industry(15,"20735-100")
  
  // console.log(industria.getCep());
  // console.log(industria.getMachinesQuantity())

//Exercício 4, 5 e 6
const usuarioResidencial = new ClienteResidencial("Leonardo",278547,100,3,"20735-130")
console.log(usuarioResidencial.getCep())
console.log(usuarioResidencial.calculateBill())

const usuarioComercial = new ClienteComercial("Leonardo",568742,2000, "12.345.678/0001-22", 5,"20735-120")
console.log(usuarioComercial.getCnpj())
console.log(usuarioComercial.calculateBill())

const usuarioIndustrial = new ClienteIndustrial("Leonardo",336985,54500, 92877236 ,10,"20735-100")
console.log(usuarioIndustrial.getIndustryNumber())
console.log(usuarioIndustrial.calculateBill())
