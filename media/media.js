let valorMedia = document.getElementById("media")


function calcularMedia(){
    let num1 = parseFloat(prompt("Digite um número"))
    let num2 = parseFloat(prompt("Digite um número"))
    let media = (num1 + num2) / 2
    valorMedia.innerText = `A média do aluno é: ${media}`
    
}