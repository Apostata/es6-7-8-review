// guarda valores unicos de um tipo
//similar 1 array

let mySet = new Set(['born', 'to be', 'wild']);
console.log(mySet);
console.log(mySet.size);
mySet.add('baby');
console.log(mySet, 'Adding "baby"');
mySet.add('baby');
console.log(mySet, 'tentando adicionar "baby" novamente, o que não irá acontecer');
mySet.delete('baby');
console.log(mySet, '"baby" deleted');
console.log(mySet.has('baby'), 'Verifica se tem baby no Set mySet.has("baby")');
console.log(mySet.has('wild'), 'Verifica se tem wild no Set mySet.has("wild")');

//é usado um iterator

let it = mySet.values();
console.log(it.next());

// ou
for(let name of it){
    console.log(name);
}
