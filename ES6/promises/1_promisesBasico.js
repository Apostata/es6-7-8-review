var defer =  new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(true){
        resolve('Rsolvendo Promessa');
        }
        else{
            reject('rejeitando Promessa, Error');
        }
    }, 2000)
});

defer.then((data)=>{
    console.log(data);
    return 'foo'
})
.then((data)=>{
    console.log(data);
})
.catch((erro)=>{
    console.error(erro);
});