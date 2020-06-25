// REST

const usuario = {
    nome: "Diego",
    idade: 20,
    empresa: "Rocketseat"
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

//REST

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//REST

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(1, 3, 4);

//SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

//SPREAD

const usuario1 = {
    nome: 'Diego',
    idade: 20,
    empresa: "Rocketseat",
};

const usuario2 = {...usuario1, nome: "Gabriel" };

console.log(usuario2);