let livros = []
let livrosLista = document.getElementById("exibir")

function exibir(){
    let novoLivro = prompt("Qual o nome do livro que deseja adicionar? ")  
    livros.push(novoLivro)
    livrosLista.innerText = `Lista de livros: ${livros}`

    
}