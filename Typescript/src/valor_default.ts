/*RELEMBRANDO COMO DECLARAR UM OBJETO*/
// let objeto = {
//     nome: "Elisangela",
//     email: "elis@gmail.com.br"
// }

// console.log(objeto)


/*APLICANDO VALOR DEFAULT NA FUNÇÃO*/
// function cadastro(email: string, senha: string, nome = "Aluno", idade?: number): void{ // Essa '?' significa que é opcional
//     let data = {email, senha, nome, idade}
//     console.log(data)
// }

// cadastro("elis@gmail.com.org.br", "123456", "Elis", 18)

/*FUNÇÃO NORMAL*/


// function totalVendas(venda1: number, venda2: number, venda3: number, venda4: number): number{
//     const total = venda1 + venda2 + venda3 + venda4

//     console.log("O total de vendas é: $", total)

//     return total
// }


// totalVendas(10, 20, 30, 40)

/*OPERADOR REST NA FUNÇÃO*/

// function totalVendas(...vendas: number[]) {
//     let quantidadeVendas = vendas.length

//     console.log(`Você fez ${quantidadeVendas} vendas hoje`)

// }

// totalVendas(10, 20, 30, 40, 50)

function mostraNomes(...nomes: string[]) {

    let totalNomes = nomes.length
    console.log("A quantidade de nomes cadastrados foram: " + totalNomes)
    
   // console.log(nomes) > funciona assim também. A diferença é que aqui retorna um array

    nomes.map(nome => { 
        console.log(nome) //Aqui retorna individualmente
    })
}

mostraNomes("Elis", "Elisa", "ELisangela")