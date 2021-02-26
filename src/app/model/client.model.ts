
export interface Client{
    id? : string;
    nome : string;
    tipoDocumento : string;
    cpfcnpj : string;
    cep : string;
    endereco : string;
    numero : string;
    complemento : string;
    bairro : string;
    cidadeId : string;
    estadoId : string;
    telefone : string;
    celular : string;
    email : string;
}

export interface ResponseClients{
    data: Client[];
}