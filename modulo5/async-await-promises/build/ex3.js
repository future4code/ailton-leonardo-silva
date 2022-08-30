"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseURL_1 = require("./baseURL");
const getSubscribers = async () => {
    const response = await axios_1.default.get(`${baseURL_1.baseURL}/subscribers`);
    return response.data.map((res) => {
        console.log(res.id, res.name, res.email);
        return {
            id: res.id,
            name: res.name,
            email: res.email,
        };
    });
};
getSubscribers();
//# sourceMappingURL=ex3.js.map