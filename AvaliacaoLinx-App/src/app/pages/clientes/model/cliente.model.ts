export class ClienteModel {
    id: string;
    nome: string;
    cpf: string;
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string

    constructor() {
        this.id = '00000000-0000-0000-0000-000000000000';
        this.nome = '';
        this.cpf = '';
        this.cep = '';
        this.logradouro ='';
        this.bairro = '';
        this.cidade = '';
        this.estado = '';
    }
}
