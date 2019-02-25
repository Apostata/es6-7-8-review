/*
parecido com o set, mas não define apenas valor.
pode ser definido chave e valor.
*/
let m = new Map();
m.set('Rene', 34);
m.set('Erica', 29);
m.set('Helena', {age:1.8});
m.set('teste', 10);

console.log(m.size, 'length (m.size)');
m.delete('teste')
console.log(m, 'Deletando indice teste');
console.log(m.has('Helena'), 'Verifica se o indice tem "Helena"');
let it = m.values();

console.log(it.next());
for(values of it){
    console.log(values);
}

console.log(m.get('Erica'), 'usando metodo get m.get("Erica")');
m.set('Erica', 30);
console.log(m.get('Erica'), 'usando metodo set m.set("Erica", 30)');