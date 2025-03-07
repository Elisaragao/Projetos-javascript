interface produtoProps {
    id: string;
    readonly nome: string; //SIGNIFICA QUE ESSE ATRIBUTO NÃO PODE SER ALTERADO, COMO O ID, POR EXEMPLO
    descricao: string;
}

let produto1: produtoProps = { //OBJETO COM AS PROPRIEDADES DA INTERFACE produtosProps
    id: "1",
    nome: "Tenis de corrida",
    descricao: "Ótimo para iniciantes"
}

produto1.id = "123" //Alterar o valor antes já estabelecido

console.log(produto1.id)