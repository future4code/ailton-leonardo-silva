"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓");
});
app.post("/lojinha/createProduct", (req, res) => {
    try {
        const { id, name, price } = req.body;
        if (!id) {
            res.statusCode = 401;
            throw new Error(`O campo de identificação deve ser preenchido.`);
        }
        if (!name) {
            res.statusCode = 401;
            throw new Error(`O campo de identificação deve ser preenchido.`);
        }
        if (name !== String(name)) {
            res.statusCode = 401;
            throw new Error(`O Nome deve ser uma String.`);
        }
        if (!price) {
            res.statusCode = 401;
            throw new Error(`O Valor deve ser preenchido.`);
        }
        if (price < 0) {
            res.statusCode = 401;
            throw new Error(`O Valor deve ser maior que 0.`);
        }
        if (price !== Number(price)) {
            res.statusCode = 401;
            throw new Error(`O Valor deve ser um numero.`);
        }
        const newProducts = { id, name, price };
        data_1.products.push(newProducts);
        res.status(201).send(newProducts);
        console.log(data_1.products);
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.get("/lojinha/getAllProducts", (req, res) => {
    res.send(data_1.products);
    console.log(data_1.products);
});
app.delete("/lojinha/deleteProduct/:id", (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const filterProduct = data_1.products.filter((produto) => {
            console.log(produto);
            return produto.id !== id;
        });
        console.log(filterProduct);
        res.send(filterProduct);
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map