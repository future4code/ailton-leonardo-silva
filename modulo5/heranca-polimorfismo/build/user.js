"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
    getPassword() {
        return this.password;
    }
    introduceYourself() {
        return `Olá ${this.name}, bom dia!`;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map