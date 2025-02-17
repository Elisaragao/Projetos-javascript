let listElement = document.querySelector("#app ul")
let inputElement = document.querySelector("#app input")
let buttonElement = document.querySelector("#app button")

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || [] //Ou ele busca as tarefas já existententes ou retorn uma array vazia


function renderTarefas() {

    listElement.innerHTML = ""
    tarefas.map((tarefa) => {
        let liElement = document.createElement('li')
        let tarefaText = document.createTextNode(tarefa)

        let linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')

        let linkText = document.createTextNode("Excluir")
        linkElement.appendChild(linkText)
        
        let posicao = tarefas.indexOf(tarefa)
        linkElement.setAttribute("onclick", `excluirTarefa(${posicao})`)

        liElement.appendChild(tarefaText)
        liElement.appendChild(linkElement)
        listElement.appendChild(liElement)

    })

}

    renderTarefas()

function adicionarTarefa() {
    if (inputElement.value === '') {
        alert("Digite alguma tarefa")
        return false
    } else {
        let novaTarefa = inputElement.value

        tarefas.push(novaTarefa)
        inputElement.value = ''

        renderTarefas()
        salvarTarefas()
    }
}

function excluirTarefa(posicao){
//alert("A posição do item é: " + posicao)
tarefas.splice(posicao, 1)
renderTarefas()
salvarTarefas()
}
buttonElement.onclick = adicionarTarefa

function salvarTarefas(){
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas)) //JSON.stringfy para salvar uma lista, não pode ser acesso direto


}