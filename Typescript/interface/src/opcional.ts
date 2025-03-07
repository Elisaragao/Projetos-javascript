interface cadastroProps {
    nome?: string; // string ou undefined
    email: string;
    status?: boolean; // boolean OU undefined
}

const novoUsuaruo: cadastroProps = {
    nome: "Elis",
    email: "elis@elis.com.br",
    status: false
}

//console.log(novoUsuaruo)

//function novoUser({nome, email, status}: cadastroProps){
function novoUser(usuario: cadastroProps){ //USANDO SEM DESCONSTRUIR O OBJETO
console.log(usuario.nome)
console.log(usuario.email)
console.log(usuario.status)
}

novoUser({ nome: "Elisangela", email: "elisangela.@elis.com.br", status: false })