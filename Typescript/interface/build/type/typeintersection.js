"use strict";
//Com o type alias conseguimos criar tipos com mais informações que os tipos primitivos
const produtoInfo = {
    id: 123,
    nome: "Pc",
    descricao: "Pc dos bão"
};
const categoria1 = {
    slug: "Hardware",
    quantidadeProduto: 2
};
const novoProduto = {
    id: 12345,
    nome: "Elis",
    //descricao: "lalala"
    slug: "elis.com.br",
    quantidadeProduto: 1
};
console.log(novoProduto);
