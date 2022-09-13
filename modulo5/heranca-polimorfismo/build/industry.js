"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Industry = void 0;
const place_1 = require("./place");
class Industry extends place_1.Place {
    constructor(machinesQuantity, cep) {
        super(cep);
        this.machinesQuantity = machinesQuantity;
    }
    getMachinesQuantity() {
        return this.machinesQuantity;
    }
}
exports.Industry = Industry;
//# sourceMappingURL=industry.js.map