let frutas = ["melancia", "pera", "uva"]
let frutaLista = document.getElementById("frutas")
frutaLista.innerText = frutas

function registrarFrutas(novaFruta) {
    novaFruta = prompt("Digite uma fruta")
    frutas.push(novaFruta)
    frutaLista.innerText = frutas
}
