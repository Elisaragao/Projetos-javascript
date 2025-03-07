"use strict";
const novoUsuaruo = {
    nome: "Elis",
    email: "elis@elis.com.br",
    status: false
};
//console.log(novoUsuaruo)
//function novoUser({nome, email, status}: cadastroProps){
function novoUser(usuario) {
    console.log(usuario.nome);
    console.log(usuario.email);
    console.log(usuario.status);
}
novoUser({ nome: "Elisangela", email: "elisangela.@elis.com.br", status: false });
