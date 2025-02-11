let series = []
let listaSeries
listaSeries = document.getElementById("exibir")
    
    function exibir(){
        novaSerie = prompt("Qual a série que deseja adicionar?")
        series.push(novaSerie)
        listaSeries.innerHTML = `A lista de séries é: ${series}` 
    }