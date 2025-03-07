type uuid = string | number | null //DECLARANDO UM NOVO TIPO 

function acessar(uuid: uuid, nome: string) {
    console.log(`Id: ${uuid} - Bem-vindo(a) ${nome}`)
}

function logUsuario(uuid: uuid) {
    console.log(`Conta referente ao UUID: ${uuid}`)
}

// acessar("123", "Elis")

// acessar("1234", "Elisangela")

//logUsuario("123")

type Moeda = "BRL" | "EUR" | "USD"

function comprarItem(moeda: Moeda) {
    console.log(`Comprando com a moeda ${moeda}`)
}

comprarItem("EUR")