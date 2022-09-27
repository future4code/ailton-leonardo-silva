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
            const { name, nickname } = req.body;
            if (!name && !nickname) {
                res.statusCode = 422;
                res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'";
                throw new Error();
            }
            new UserDatabase_1.UserDatabase().edit(req.params.id, { name, nickname });
            res.end();
        }
        catch (error) {
            if (res.statusCode === 200) {
                res.status(500).end();
            }
            res.end();
        }
    });
}
exports.default = createUser;
