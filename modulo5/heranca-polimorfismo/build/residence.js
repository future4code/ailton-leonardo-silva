"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Residence = void 0;
const place_1 = require("./place");
class Residence extends place_1.Place {
    constructor(residentsQuantity, cep) {
        super(cep);
        this.residentsQuantity = residentsQuantity;
        this.cep = cep;
    }
    getResidentsQuantity() {
        return this.residentsQuantity;
    }
}
exports.Residence = Residence;
//# sourceMappingURL=residence.js.map