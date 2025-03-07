"use strict";
function mostraNomes(...nomes) {
    let totalNomes = nomes.length;
    console.log("A quantidade de nomes cadastrados foram: " + totalNomes);
    nomes.map(nome => {
        console.log(nome);
    });
}
mostraNomes("Elis", "Elisa", "ELisangela");
