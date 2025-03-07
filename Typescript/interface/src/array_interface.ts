// interface TecnologiaProps {
//     id: string;
//     nome: string;
//     slug?: (string | number)[];
// }

// let tecnologia1: TecnologiaProps = {
//     id: "123",
//     nome: "ElisGpt",
//     slug: ["Faz ovo frito", "Sabe fazer miojo", "Limpa a casa", 10]
// }

interface TecnologiaProps {
    id: string;
    nome: string;
    descricao: string;
}

//FAZER UMA INTERFACE TER OUTRA INTERFACE COMO ARRAY, ASSIM OS ATRIBUTOS DE UMA INTERF. SERÃO PROPRIEDADES DESSE ARRAY
interface NomesProps{
    tecnologias: TecnologiaProps[];
}

let frontend: NomesProps = {
    tecnologias: [
        {id: "123", nome: "ElisGpt", descricao: "Faz ovo frito"},
        {id: "1234", nome: "RiGpt", descricao: "Limpa a casa"}
    ]
}


console.log(frontend.tecnologias)
