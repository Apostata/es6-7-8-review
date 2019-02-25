/*
Elementos que podem ser iterados, que podem ser selecionados ou contados
um a um como arrays por exemplo, são Iterables.

um Iterator é o elemento que conta, seleciona um a um dos Iterables.
*/

var txt = 'Brasil';
var it = txt[Symbol.iterator]();

console.log(
    it.next(),
    it.next(),
    it.next(),
    it.next(),
    it.next(),
    it.next(),
    it.next()
);

for (letter of txt){
    if(letter === 'a') break;
    console.log(letter);
}