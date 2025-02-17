function mudar() {
    let nome = prompt("Digite um nome")

    if (nome === "Elis" || nome === "elis") {
        document.body.style.backgroundColor = "pink"
    }else if (nome === "Thiago") {
        document.body.style.backgroundColor = "yellow"
    }else if (nome === "Ikaro"){
        document.body.style.backgroundColor = "blue"
    }else if(nome === "Enzo"){
        document.body.style.backgroundColor = "red"
    }else{
        document.body.style.backgroundColor = "white"
        }
}
