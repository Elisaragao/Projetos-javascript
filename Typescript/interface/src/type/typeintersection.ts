//Com o type alias conseguimos criar tipos com mais informações que os tipos primitivos

type Info = {
    id: number;
    nome: string;
    descricao?: string;
}

const produtoInfo: Info = {
    id: 123,
    nome: "Pc",
    descricao: "Pc dos bão"
}

type Categoria = {
    slug: string;
    quantidadeProduto: number;
}

const categoria1: Categoria = {
    slug: "Hardware",   
    quantidadeProduto: 2
}

type ProdutoInfo = Info & Categoria //ProdutoInfo é a interseção entre info e Categoria

const novoProduto: ProdutoInfo = {
    id: 12345,
    nome: "Elis",
    //descricao: "lalala"
    slug: "elis.com.br",
    quantidadeProduto: 1
}

console.log(novoProduto)