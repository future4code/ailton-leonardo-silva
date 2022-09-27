"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    bark() {
        console.log("au au 🐶");
    }
    eat(quantity) {
        console.log("the dog has eaten " + quantity);
    }
}
exports.Dog = Dog;
//# sourceMappingURL=Dog.js.map