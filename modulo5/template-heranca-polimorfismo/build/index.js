"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioJuridico = exports.UsuarioFisico = void 0;
class Usuario {
    constructor(id, nome, endereco) {
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        console.log("Construtor classe mãe");
    }
}
class UsuarioFisico extends Usuario {
    constructor(id, nome, endereco, cpf) {
        super(id, nome, endereco);
        this.cpf = cpf;
        console.log("Construtor classe filha");
    }
}
exports.UsuarioFisico = UsuarioFisico;
class UsuarioJuridico extends Usuario {
    constructor(id, nome, endereco, cnpj) {
        super(id, nome, endereco);
        this.cnpj = cnpj;
    }
}
exports.UsuarioJuridico = UsuarioJuridico;
const usuario1 = new UsuarioFisico("001", "Leonardo", "Rua Medina", "11111111111");
const usuario2 = new UsuarioJuridico("002", "Leonardo", "Travessa Miracema", "1111-2222/678");
//# sourceMappingURL=index.js.map