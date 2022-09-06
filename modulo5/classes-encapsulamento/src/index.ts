class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  //Exercícios 1B)
    // Função para receber os dados básicos do usuário.
  public getAccountData() {
   const data = {
      "cpf": this.cpf,
      "name": this.name,
      "age": this.age,
      "balance": this.balance,
      "transactions": this.transactions
   }
    return data;
  }
  // Função para atualizar o saldo do usuário.
  public updateBalance(value:number) {
   const balance:number = this.balance + Number(value)
    return balance;
  }
}

//Exercício 1B - 1 vez para cada vez que chamamos o constructor e 1C)

// 
const user1 = new UserAccount("55555555555", "Leonardo", 45)
const user2 = new UserAccount("66666666666", "Raquel", 39)
const user3 = new UserAccount("77777777777", "Laura", 10)

// console.log(user1.updategit stash


//Exercícios 1A)
//Construtores são basicamente funções de inicialização de uma classe,
//as quais são invocadas no momento em que objetos desta classe são criadas.
//Eles permitem inicializar campos internos da classe e alocar recursos,
//que um objeto da classe possa demandar, tais como memória, arquivos, semáforos, soquetes, etc.

//Exercício 2
class Transaction {
   private date: string;
   private value: number;
   private description: string;
   
   constructor(date: string, value: number, description: string) {
     this.date = date;
     this.value = value;
     this.description = description
   }
 }

//Exercício 3
class Bank {
   private accounts: UserAccount[];
 
   constructor(accounts: UserAccount[]) {
     this.accounts = accounts;
   }
 
}


const NewAccount:UserAccount[] = [user1, user2, user3]
console.log(NewAccount)