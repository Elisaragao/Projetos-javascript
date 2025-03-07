"use strict";
/*
    Vamos supor que temos um jogo e esse jogo tem uma dlc
*/
const let4dead = {
    id: "123",
    nome: "Let 4 dead",
    descricao: "Luta contra zombies",
    plataforma: ["Xbox"]
};
const let4DeadDLC = {
    id: "10",
    nome: "Let 4 dead - Novos mapas",
    descricao: "4 novos mapas para jogar online",
    plataforma: ["Xbox"],
    novoConteudo: ["Novo conteúdo aleatório"],
    jogoOriginal: let4dead
};
console.log(let4DeadDLC);
