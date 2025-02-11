function calcular(event) {
    //Faz com que as informações continuem no campo input
    event.preventDefault()

    var peso
    var altura
    var imc
    var resultado

    peso = document.getElementById("peso").value
    altura = document.getElementById("altura").value
    imc = peso / (altura * altura)

    if (imc < 17) {
        resultado = document.getElementById("resultado")
        resultado.style.color = "#090C9B"
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "</br> Muito abaixo do peso"
    } else if (imc >= 17 && imc < 18.5) {
        resultado = document.getElementById("resultado")
        resultado.style.color = "#090C9B"
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2)+ "</br> Abaixo do peso"
    } else if (imc >= 18.5 && imc < 30) {
        resultado = document.getElementById("resultado")
        resultado.style.color = "#3D52D5"
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2)+ "</br> Peso normal"
    } else {
        resultado = document.getElementById("resultado")
        resultado.style.color = "#090C9B"
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.tofixed(2) + "</br> Acima do peso"
    }
}

