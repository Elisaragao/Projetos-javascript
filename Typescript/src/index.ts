//Type object

// let novoUsuario: object = {
// nome: "Elis",
// email: "elis@teste.com"
// }

// console.log(novoUsuario)


//Type enum

// enum designColors{
//     white,
//     black
// }

// console.log(designColors.white)

//Tyoe unknown (deconhecido > quando você não sabe o TIPO que vai receber)

//AFIRMANDO O TIPO

let statusAtual: unknown = 1

let mudaStatus: number =  0

//AFIRMANDO QUE statusAtual É DE FATO UM NÚMERO
mudaStatus = statusAtual as number

//OUTRA MANEIRA DE AFIRMAR O TIPO
mudaStatus = <number>statusAtual

console.log(mudaStatus)

let query: unknown = "Hello world!"

let searchTerm: string = query as string

console.log("Search Tem: " + searchTerm)





