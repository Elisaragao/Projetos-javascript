interface cursoProps {
    id: string;
    nome: string;
    preco: number;
}

//     //Definir apenas a função e o que ela deve esperar e retornar
//     promocao: (preco: number) => void

// }


//  function mostraPromocao(preco: number): void {
//     console.log(`Promoção do curso por apenas: R$ ${preco}`)

// // }

// const novoCurso: cursoProps = {
//     id: "10",
//     nome: "Sujeito programador",
//     preco: 39.90,
//     //promocao: mostraPromocao
//     promocao: (preco: number): void => {
//         console.log("Preço total de: ", preco)
//     }
// }

// console.log(novoCurso)
// console.log(novoCurso.promocao(novoCurso.preco)) // ou console.log(novoCurso.promocao(20))

interface somaProps {
    (valor1: number, valor2: number): number

}

let somaNumeros: somaProps = (valor1: number, valor2: number): number => {
    console.log("Resultado: ", valor1 + valor2)
    return valor1 + valor2
}

const resultado = somaNumeros(70, 30)

console.log("Resultado: ", resultado)