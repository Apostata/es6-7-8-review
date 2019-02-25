// outro primitivo como Array, String

let foo = Symbol('name');
let bar = Symbol('name');
/*
    symbolos são unicos e imutaveis;
    ou seja, são unicos pois são primitivos, cada um referencia
    um espaço diferente na memória.
*/
console.log(foo, bar, foo == bar);

// para que serve symbols?
// para usar um propriedade se correr o risco de se repetir, pois é primitv
let obj1 = {
    name: 'Rene',
    age: 34,
    city: 'São Paulo',
    name: 'opa'
};
// name é sobrescrito por 'opa'

console.log(obj1); 

let obj2 = {
    [Symbol('name')]: 'Rene',
    [Symbol('age')]: 34,
    city: 'São Paulo',
};
console.log(obj2); 
console.log(Object.keys(obj2)); 
const symbols = Object.getOwnPropertySymbols(obj2); 

const data = symbols.map(syn => obj2[syn]);
console.log(data);
