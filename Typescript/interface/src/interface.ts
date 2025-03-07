//CONJUNTO DE DADOS (UM PADRÃO) PARA DESCREVER A ESTRUTURA DE OBJETO
interface lojaProps {
    nome: string;
    endereco: string;
    status: boolean;
}

const BurguerKing: lojaProps = {
    nome: "Burguer King",
    endereco: "Centro",
    status: true,
}

//console.log(BurguerKing)

function novaLoja({nome, endereco, status}: lojaProps): void {
    console.log(`Loja ${nome} criada com sucessso!`)
    console.log(`Endereço ${endereco} criado coms sucesso!`)
    console.log(`Status da loja: ${status}`)

    console.log("=================")

}

novaLoja({nome: "Elis e cia", endereco: "Rua dos fulanos", status: true})

novaLoja({nome: "Elis e ciclanos", endereco: "Rua dos ciclanos", status: false})