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
app.get("/iwfs/ping", (req, res) => {
    res.send("Pong! 🏓");
});
app.get("/ifws/clientes", (req, res) => {
    let errorCode = 400;
    try {
        if (!data_1.clientesDB) {
            errorCode = 404;
            throw new Error("Usuários não encontrados.");
        }
        if (!data_1.clientesDB.length) {
            errorCode = 401;
            throw new Error("Usuários não encontrados.");
        }
        res.status(200).send(data_1.clientesDB);
    }
    catch (error) {
        res.status(errorCode || 500).send({ message: error.message });
    }
});
app.get("/ifws/clientes/:cpf", (req, res) => {
    let errorCode = 400;
    try {
        const cpf = req.params.cpf;
        if (!data_1.clientesDB) {
            errorCode = 404;
            throw new Error("Usuários não encontrados.");
        }
        if (!data_1.clientesDB.length) {
            errorCode = 401;
            throw new Error("Usuários não encontrados.");
        }
        const clienteCPF = data_1.clientesDB.filter((cliente) => {
            cliente.cpf === Number(cpf);
            errorCode = 404;
            throw new Error("Não encontramos esse CPF em nossa base de dados.");
        });
        const saldoCliente = data_1.clientesDB.filter((cliente) => {
            return cliente.cpf === Number(cpf);
        }).map((saldo) => {
            return saldo.saldo;
        });
        res.send(saldoCliente);
    }
    catch (error) {
        res.status(errorCode || 500).send({ message: error.message });
    }
});
app.post("/iwfs/clientesDB", (req, res) => {
    let errorCode = 400;
    try {
        const { id, nome, cpf, nascimento, saldo, extrato } = req.body;
        if (!data_1.clientesDB) {
            errorCode = 404;
            throw new Error("Usuários não encontrados.");
        }
        if (!data_1.clientesDB.length) {
            errorCode = 404;
            throw new Error("Usuários não encontrados.");
        }
        const newClient = { id, nome, cpf, nascimento, saldo, extrato };
        if (!nome || !cpf || !nascimento) {
            errorCode = 422;
            throw new Error("Algum campo nao foi preenchido corretamente.");
        }
        const ChecaIdade18 = (data) => {
            const d = new Date();
            let data_brasileira = data;
            let data_americana = data_brasileira.split('/').reverse().join('-');
            data = data_americana;
            const date = new Date(data);
            const anoAtual = d.getFullYear();
            const mesAtual = d.getMonth() + 1;
            const diaAtual = d.getDate();
            const ano = date.getFullYear();
            const dia = (date.getDate()) + 1;
            const mes = (date.getMonth()) + 1;
            const idade = anoAtual - ano;
            if (idade <= 18 && mesAtual < mes || mesAtual === mes && diaAtual < dia) {
                errorCode = 401;
                throw new Error("O usuário tem menos de 18 anos e não pode abrir uma conta.");
            }
        };
        ChecaIdade18(nascimento);
        const clienteCPF = data_1.clientesDB.filter((cliente) => {
            cliente.cpf === cpf;
            errorCode = 409;
            throw new Error("Esse CPF já está cadastrado em nossa base de dados.");
        });
        data_1.clientesDB.push(newClient);
        res.status(201).send(newClient);
    }
    catch (error) {
        res.status(errorCode || 500).send({ message: error.message });
    }
});
app.put("/iwfs/PutclientesDB", (req, res) => {
    var _a;
    let errorCode = 400;
    try {
        const nome = req.body.nome;
        const cpf = req.body.cpf;
        const extrato = req.body.extrato;
        if (!data_1.clientesDB) {
            errorCode = 404;
            throw new Error("Usuários não encontrados.");
        }
        if (!data_1.clientesDB.length) {
            errorCode = 404;
            throw new Error("Usuários não encontrados.");
        }
        if (!nome || !cpf) {
            errorCode = 422;
            throw new Error("Algum campo nao foi preenchido corretamente.");
        }
        let novoSaldo;
        const filtraCliente = data_1.clientesDB.filter((cliente) => {
            return cliente.cpf === cpf;
        });
        const mapSaldo = filtraCliente.map((saldo) => {
            return saldo.saldo;
        });
        const clienteIndex = data_1.clientesDB.findIndex(cliente => cliente.cpf === cpf && cliente.nome.toLowerCase() === nome.toLowerCase());
        console.log("Index", clienteIndex);
        novoSaldo = extrato.valor + Number(mapSaldo);
        console.log(cpf);
        data_1.clientesDB[clienteIndex].saldo = novoSaldo;
        (_a = data_1.clientesDB[clienteIndex].extrato) === null || _a === void 0 ? void 0 : _a.push(extrato);
        res.send(data_1.clientesDB);
    }
    catch (error) {
        res.status(errorCode || 500).send({ message: error.message });
    }
});
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//# sourceMappingURL=index.js.map