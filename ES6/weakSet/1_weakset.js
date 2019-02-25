// similar ao set (óbvio)
// weakSet só aceita objetos
// não é iteravel
// não é possivel pegar seus valores

let obj1 = {
    name: 'rene',
    age: 34
};

let obj2 = {
    name: 'erica',
    age: 29
};

let ws = new WeakSet([obj1, obj2]);

console.log(ws);
console.log(ws.has(obj1), "verifica se weakset tem obj1");
ws.add({name:'helena', 'age':1.8});
var teste = {name:'teste', 'age':34};
ws.add(teste);
console.log(ws, 'adicionando obj ao weakset');
ws.delete(teste);
console.log(ws, '"teste" deletado do weakSet');


