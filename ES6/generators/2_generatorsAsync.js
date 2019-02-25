function ajax(url){
    fetch(url)
        .then(data => data.json())
        .then(data => dados.next(data)); //retorna executando a próxima
        // iteração do generator com os dados (data)
}

function* ajaxGen(){
    console.log('bsucando post');
    const posts = yield ajax('https://willianjusten.com.br/search.json');
    console.log(posts);

    console.log('Buscando dados github');
    const github  = yield ajax('https://api.github.com/users/apostata');
    console.log(github);
}

const dados = ajaxGen();
dados.next();
