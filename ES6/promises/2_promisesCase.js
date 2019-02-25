var posts = fetch('https://willianjusten.com.br/search.json');
// posts
//     .then(data =>  {
//         const teste = data.json();
//         console.log(teste); // mostra apenas a promise da leitura da stream
//     });

var posts2 = fetch('https://willianjusten.com.br/search.json');
posts2
    .then(data =>  data.json()) //retorna a promise do fetch
    .then(data => {
        //throw new Error('deu ruim!');
        data.map(post => console.log(post.title))
    }) //retorna da leitura da stream e mostra o resultado
    .catch(erro => console.error(erro));
// esse é um comportamento padrão da api do fetch