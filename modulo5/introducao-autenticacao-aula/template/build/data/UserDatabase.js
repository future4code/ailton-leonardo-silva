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
exports.UserDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class UserDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.create = (newUser) => __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection()('to_do_list_users')
                .insert(newUser);
        });
        this.edit = (id, columnsUpdate) => __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection()('to_do_list_users')
                .update(columnsUpdate)
                .where({ id });
        });
        this.getByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.getConnection()('to_do_list_users')
                .where({ email });
            return result;
        });
    }
}
exports.UserDatabase = UserDatabase;
