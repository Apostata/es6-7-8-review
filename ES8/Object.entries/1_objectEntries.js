// pega cada prop do objeto transformando em um array de chave e valor

const animals = {
    camel: 3,
    llama: 2,
    alpaca: 5
};
const entries = Object.entries(animals);
console.log(entries);

const aniMap = new Map(entries);
console.log(aniMap);
console.log(aniMap.size);
console.log(aniMap.get('alpaca'));