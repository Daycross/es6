export function soma(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

//sequêncial

import { soma, sub } from './funcoes';

console.log(soma(1, 2));
console.log(sub(1, 2));

//Export Default serve pra um arquivo com uma única função, 
//nesse caso é desnecessário o uso de chaves