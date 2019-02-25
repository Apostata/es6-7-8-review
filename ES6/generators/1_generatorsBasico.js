function* getNames(){
    console.log('chama primeiro nome');
    yield 'Helena';
    console.log('chama segundo nome');
    yield 'Erica';
    console.log('chama terceiro nome');
    yield 'Rene';
}

const names = getNames();
console.log(
    names.next(),
    names.next(),
    names.next(),
    names.next()
);