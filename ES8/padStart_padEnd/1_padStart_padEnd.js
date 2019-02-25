/*
preenche no final e no inicio da string
diz quantos caracteres terá a string e com o que ela deverá
ser preenchida antes e depois, caso ela não possua o temanho determinado.
*/
console.log(''.padStart(5,'Hi'));
console.log('abc'.padStart(6,'Hi').padEnd(9,'Ne'));

//  exemplo de uso, conta bancária
var conta = '2345';
console.log(conta.padStart(10, 0))
console.log(conta.padEnd(10, 0))