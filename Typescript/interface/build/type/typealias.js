"use strict";
function acessar(uuid, nome) {
    console.log(`Id: ${uuid} - Bem-vindo(a) ${nome}`);
}
function logUsuario(uuid) {
    console.log(`Conta referente ao UUID: ${uuid}`);
}
function comprarItem(moeda) {
    console.log(`Comprando com a moeda ${moeda}`);
}
comprarItem("EUR");
