/*
    Vamos supor que temos um jogo e esse jogo tem uma dlc
*/

interface JogoProps {
    readonly id: string;
    nome: string;
    descricao: string;
    plataforma: string[];

}

const let4dead: JogoProps = {
    id: "123",
    nome: "Let 4 dead",
    descricao: "Luta contra zombies",
    plataforma: ["Xbox"]
}

//console.log(let4dead)

// interface DLC extends JogoProps{ //TEM TUDO QUE JogosProps TEM + UM ADICIONAL
//     novoConteudo: string[];
// }

// const let4DeadDLC: DLC = {
//     id: "10",
//     nome: "Let 4 dead - Novos mapas",
//     descricao: "4 novos mapas para jogar online",
//     plataforma: ["Xbox"],
//     novoConteudo: ["Novo conteúdo aleatório"]
// }

// console.log(let4DeadDLC)

interface DLC extends JogoProps{ //TEM TUDO QUE JogosProps TEM + UM ADICIONAL
    jogoOriginal: JogoProps;
    novoConteudo: string[];
}

const let4DeadDLC: DLC = {
    id: "10",
    nome: "Let 4 dead - Novos mapas",
    descricao: "4 novos mapas para jogar online",
    plataforma: ["Xbox"],
    novoConteudo: ["Novo conteúdo aleatório"],
    jogoOriginal: let4dead
}

console.log(let4DeadDLC)