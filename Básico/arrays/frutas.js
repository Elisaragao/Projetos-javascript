let frutas = ["melancia", "pera", "uva"]
let frutaLista = document.getElementById("frutas")
frutaLista.innerText = frutas

function registrarFrutas(novaFruta) {
    novaFruta = prompt("Digite uma fruta")
    frutas.push(novaFruta)
    frutaLista.innerText = frutas
    
    //-----------------------------------------------//

    //ADICIONAR IMAGEM NO BODY DO DOCUMENTO
    
    //let imagem = document.createElement("img")
    //imagem.src = "./imgs/módulo.png"
    //document.body.appendChild(imagem)
    
    //-----------------------------------------------//

    //ADICIONAR IMAGEM NO DOCUMENTO
    //document.write("<img src='./imgs/módulo.png'/>")
}
