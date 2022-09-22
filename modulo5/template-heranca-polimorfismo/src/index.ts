class Usuario {
  private id: string;
  private nome: string;
  private endereco: string;

  constructor(id: string, nome: string, endereco: string) {
    this.id = id;
    this.nome = nome;
    this.endereco = endereco;
    console.log("Construtor classe mãe");
  }
}

export class UsuarioFisico extends Usuario {
  //Atributos (propriedades da classe)
  private cpf: string;

  constructor(id: string, nome: string, endereco:string , cpf: string) {
    super(id, nome, endereco);
    this.cpf = cpf;
    console.log("Construtor classe filha");
  }
}

export class UsuarioJuridico extends Usuario {
  //Atributos (propriedades da classe)
  private cnpj: string;

  constructor(id: string, nome: string, endereco:string, cnpj: string) {
    super(id, nome, endereco);
    this.cnpj = cnpj;
  }
}

const usuario1 = new UsuarioFisico("001", "Leonardo", "Rua Medina" , "11111111111");
const usuario2 = new UsuarioJuridico("002", "Leonardo", "Travessa Miracema", "1111-2222/678");
