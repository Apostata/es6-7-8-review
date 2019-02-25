
// weakMap só aceita objetos, a chave é o objeto
// não é iteravel
let obj1 = {
    name: 'rene',
    age: 34
};

let obj2 = {
    name: 'erica',
    age: 29
};


let wm = new WeakMap();
wm.set(obj1, 'Info do Rene');
wm.set(obj2, 'Info da Erica');
console.log(wm);
obj1 = null;
console.log(wm, 'Definindo obj1 como null, retira o obj1 do weakMap');
/*
como é weak, perde a referencia do obj1 na memória, então agora
o weakMap não mais mostrará os valores de obj1
*/