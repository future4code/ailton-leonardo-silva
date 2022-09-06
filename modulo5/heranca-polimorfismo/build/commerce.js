"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commerce = void 0;
const place_1 = require("./place");
class Commerce extends place_1.Place {
    constructor(floorsQuantity, cep) {
        super(cep);
        this.floorsQuantity = floorsQuantity;
    }
    getFloorsQuantity() {
        return this.floorsQuantity;
    }
}
exports.Commerce = Commerce;
//# sourceMappingURL=commerce.js.map