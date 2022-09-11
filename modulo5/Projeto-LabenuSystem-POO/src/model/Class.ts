class Class {
    private id: string;
    private nome: string;
    private data_inicio: Date;
    private data_termino: Date;
    private modulo: number;

    constructor(id: string, nome:string, data_inicio:Date, data_termino: Date, modulo:number) {
        this.id = id;
        this.nome = nome;
        this.data_inicio = data_inicio;
        this.data_termino = data_termino;
        this.modulo = modulo
    }

    //Métodos de acesso aos valores da classe Class
    getIdClass() {
        return this.id
    }
    getName() {
        return this.nome
    }
    getStartDate() {
        return this.data_inicio
    }
    getEndDate() {
        return this.data_termino
    }
    getModule() {
        return this.modulo
    }
    insertClass() {
        
    }
}

export default Class