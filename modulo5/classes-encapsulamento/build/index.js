"use strict";
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        this.transactions = [];
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    getAccountData() {
        const data = {
            "cpf": this.cpf,
            "name": this.name,
            "age": this.age,
            "balance": this.balance,
            "transactions": this.transactions
        };
        return data;
    }
    updateBalance(value) {
        const balance = this.balance + Number(value);
        return balance;
    }
}
const user1 = new UserAccount("55555555555", "Leonardo", 45);
const user2 = new UserAccount("66666666666", "Raquel", 39);
const user3 = new UserAccount("77777777777", "Laura", 10);
class Transaction {
    constructor(date, value, description) {
        this.date = date;
        this.value = value;
        this.description = description;
    }
}
class Bank {
    constructor(accounts) {
        this.accounts = accounts;
    }
}
const NewAccount = [user1, user2, user3];
console.log(NewAccount);
//# sourceMappingURL=index.js.map