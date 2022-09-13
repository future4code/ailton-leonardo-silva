"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteIndustrial = exports.ClienteComercial = exports.ClienteResidencial = void 0;
const residence_1 = require("./residence");
const commerce_1 = require("./commerce");
const industry_1 = require("./industry");
class ClienteResidencial extends residence_1.Residence {
    constructor(name, registrationNumber, consumedEnergy, residentsQuantity, cep) {
        super(residentsQuantity, cep);
        this.getCep = () => {
            return this.cep;
        };
        this.calculateBill = () => {
            try {
                const tarifaresidencial = 0.75;
                const calculoconsumo = tarifaresidencial * this.consumedEnergy;
                return `O valor da conta é de R$${calculoconsumo}`;
            }
            catch (error) {
                throw new Error("Deu erro no calculateBill.");
            }
        };
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
    }
}
exports.ClienteResidencial = ClienteResidencial;
class ClienteComercial extends commerce_1.Commerce {
    constructor(name, registrationNumber, consumedEnergy, cnpj, floorsQuantity, cep) {
        super(floorsQuantity, cep);
        this.cnpj = cnpj;
        this.getCep = () => {
            return this.cep;
        };
        this.getCnpj = () => {
            return `O seu CNPJ é ${this.cnpj}`;
        };
        this.calculateBill = () => {
            try {
                const tarifacomercial = 0.53;
                const calculoconsumo = tarifacomercial * this.consumedEnergy;
                return `O valor da conta é de R$${calculoconsumo}`;
            }
            catch (error) {
                throw new Error("Deu erro no calculateBill.");
            }
        };
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.cnpj = cnpj;
    }
}
exports.ClienteComercial = ClienteComercial;
class ClienteIndustrial extends industry_1.Industry {
    constructor(name, registrationNumber, consumedEnergy, industryNumber, machinesQuantity, cep) {
        super(machinesQuantity, cep);
        this.industryNumber = industryNumber;
        this.getCep = () => {
            return this.cep;
        };
        this.getIndustryNumber = () => {
            return `O seu número de registro de industria é ${this.industryNumber}`;
        };
        this.calculateBill = () => {
            try {
                const tarifaindustrial = 0.45;
                const calculoconsumo = tarifaindustrial * this.consumedEnergy;
                return `O valor da conta é de R$${calculoconsumo}`;
            }
            catch (error) {
                throw new Error("Deu erro no calculateBill.");
            }
        };
        this.name = name;
        this.registrationNumber = registrationNumber;
        this.consumedEnergy = consumedEnergy;
        this.industryNumber = industryNumber;
    }
}
exports.ClienteIndustrial = ClienteIndustrial;
//# sourceMappingURL=client.js.map