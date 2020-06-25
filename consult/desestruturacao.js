const usuario = {
    nome: "Diego",
    idade: 20,
    endereço: {
        cidade: 'São Paulo',
        estado: 'SP',
    },
};

//console.log(usuario);

const { nome, idade, endereço: { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario);