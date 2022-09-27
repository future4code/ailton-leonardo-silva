"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserDatabase_1 = require("../data/UserDatabase");
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, nickname, email, password } = req.body;
            const userDB = new UserDatabase_1.UserDatabase();
            if (!name || !nickname || !email || !password) {
                res.statusCode = 422;
                throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'");
            }
            const user = yield userDB.getByEmail(email);
            console.log(user);
            if (user) {
                res.statusCode = 409;
                throw new Error('Email já cadastrado');
            }
            const id = Date.now().toString();
            const newUser = { id, name, nickname, email, password };
            yield userDB.create(newUser);
            res.status(201).send({ newUser });
        }
        catch (error) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: "Internal server error" });
            }
            else {
                res.send({ message: error.message });
            }
        }
    });
}
exports.default = createUser;
