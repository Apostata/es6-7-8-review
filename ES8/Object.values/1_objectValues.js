// retorna os valores do objeto

const animals = {
    camel: 3,
    llama: 2,
    alpaca: 5
};
const values = Object.values(animals).reduce((acum, atual) => acum + atual);
console.log(values);
