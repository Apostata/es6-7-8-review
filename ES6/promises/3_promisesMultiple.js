const currency = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({currency: 'euto', value: 3.50});
    }, 2000);
});

const contries = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['Ireland', 'Scotland', 'England']);
    }, 600);
});

Promise
    .all([contries, currency])
    .then(responses => console.log(responses));
//all = espera a resposta de todas as promises

Promise
    .race([contries, currency]) 
    .then(responses => console.log(responses));
//Race = a primeira resposta sera selecionada e as demais descartadas