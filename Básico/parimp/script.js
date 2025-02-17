let primeiraTentativa = parseInt(prompt("Digite um número"));
let segundaTentativa = parseInt(prompt("Digite outro número"));

// Função que verifica se um número é par ou ímpar
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return numero + " É par!";
    } else {
        return numero + " É ímpar";
    }
}

// Exemplo de uso da função
document.write(verificarParOuImpar(primeiraTentativa));  // Vai imprimir "É par!" ou "É ímpar"
document.write("<br>"); // Para adicionar uma quebra de linha
document.write(verificarParOuImpar(segundaTentativa));  // Vai imprimir "É par!" ou "É ímpar"