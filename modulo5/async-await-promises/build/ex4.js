"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const baseURL_1 = require("./baseURL");
const news = {
    title: "19 anos da tragédia de Alcântara",
    content: "21 cientistas, engenheiros, mecanicos e cinegrafistas, morreram a 3 dias do lançamento do VLS-1. A explosão ocorreu dentro do próprio galpão.",
    date: Date.now(),
};
const createNews = async (title, content, date) => {
    try {
        await axios_1.default.put(`${baseURL_1.baseURL}/news`, {
            title,
            content,
            date
        });
    }
    catch (error) {
        console.log("Entrou no erro.");
    }
};
createNews(news.title, news.content, news.date);
//# sourceMappingURL=ex4.js.map