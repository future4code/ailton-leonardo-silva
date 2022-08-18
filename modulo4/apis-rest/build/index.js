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
app.get("/users", (req, res) => {
    let errorCode = 400;
    try {
        if (!data_1.users) {
            errorCode = 404;
            throw new Error("Usuários não encontrados.");
        }
        if (!data_1.users.length) {
            errorCode = 401;
            throw new Error("Usuários não encontrados.");
        }
        res.send(data_1.users);
    }
    catch (error) {
        res.status(errorCode || 500).send({ message: error.message });
    }
});
app.get("/usersType", (req, res) => {
    let errorCode = 400;
    try {
        const type = req.query.type;
        if (!data_1.users) {
            errorCode = 404;
            throw new Error("Usuários não encontrados.");
        }
        if (!data_1.users.length) {
            errorCode = 401;
            throw new Error("Usuários não encontrados.");
        }
        const filterType = data_1.users.filter((user) => {
            return user.type === type;
        });
        if (!filterType.length) {
            errorCode = 404;
            throw new Error(`Usuários não encontrados do tipo ${type}.`);
        }
        res.send(filterType);
    }
    catch (error) {
        res.status(errorCode || 500).send({ message: error.message });
    }
});
app.get("/usersName", (req, res) => {
    let errorCode = 400;
    try {
        const name = req.query.name;
        if (!data_1.users) {
            errorCode = 404;
            throw new Error("Usuários não encontrados.");
        }
        if (!data_1.users.length) {
            errorCode = 401;
            throw new Error("Usuários não encontrados.");
        }
        const filterName = data_1.users.filter((user) => {
            return user.name === name;
        });
        if (!filterName.length) {
            errorCode = 404;
            throw new Error(`Usuários não encontrados com o nome ${name}.`);
        }
        res.send(filterName);
    }
    catch (error) {
        res.status(errorCode || 500).send({ message: error.message });
    }
});
app.post("/createuser", (req, res) => {
    let errorCode = 400;
    try {
        const { id, name, email, type, age } = req.body;
        if (!data_1.users) {
            errorCode = 404;
            throw new Error("Usuários não encontrados.");
        }
        if (!data_1.users.length) {
            errorCode = 401;
            throw new Error("Usuários não encontrados.");
        }
        const newUser = { id, name, email, type, age };
        if (!id || !name || !email || !type || !age) {
            errorCode = 422;
            throw new Error("Algum campo nao foi preenchido corretamente.");
        }
        data_1.users.push(newUser);
        res.status(201).send(newUser);
    }
    catch (error) {
        res.status(errorCode || 500).send({ message: error.message });
    }
});
app.put("/putuser/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        const name = req.body.name;
        if (!id) {
            res.statusCode = 401;
            throw new Error(`Usuário não encontrado.`);
        }
        const indexUser = data_1.users.findIndex((produto) => {
            return produto.id === id;
        });
        if (!indexUser) {
            res.statusCode = 401;
            throw new Error(`Produto não encontrado.`);
        }
        data_1.users[indexUser].name = name;
        res.send(data_1.users);
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.patch("/patchuser", (req, res) => {
    let errorCode = 400;
    try {
        const { id, name, email, type, age } = req.body;
        if (!data_1.users) {
            errorCode = 404;
            throw new Error("Usuários não encontrados.");
        }
        if (!data_1.users.length) {
            errorCode = 401;
            throw new Error("Usuários não encontrados.");
        }
        const newUser = { id, name, email, type, age };
        if (!id || !name || !email || !type || !age) {
            errorCode = 422;
            throw new Error("Algum campo nao foi preenchido corretamente.");
        }
        data_1.users.push(newUser);
        res.status(201).send(newUser);
    }
    catch (error) {
        res.status(errorCode || 500).send({ message: error.message });
    }
});
app.delete("/users/:id", (req, res) => {
    let errorCode = 400;
    try {
        const id = Number(req.params.id);
        if (!id) {
            errorCode = 404;
            throw new Error("Usuário não encontrado.");
        }
        if (!data_1.users.length) {
            errorCode = 401;
            throw new Error("Usuário não encontrado.");
        }
        const filterId = data_1.users.filter((userid) => {
            return userid.id !== id;
        });
        if (!filterId.length) {
            errorCode = 404;
            throw new Error(`Usuário não encontrado.`);
        }
        res.status(204).send(filterId);
    }
    catch (error) {
        res.status(errorCode || 500).send({ message: error.message });
    }
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map