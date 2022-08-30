"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseURL_1 = require("./baseURL");
const getSubscribers = async () => {
    const res = await axios_1.default.get(`${baseURL_1.baseURL}/subscribers`);
    console.log(res.data);
    return res.data;
};
getSubscribers();
//# sourceMappingURL=ex1.js.map