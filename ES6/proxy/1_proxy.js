let obj = {
    name: 'rene',
    age: 34,
};

let obj2 = {
    teste: function(oples = 'Oloco!'){
        return oples;
    }
};


let proxy = new Proxy(obj, {
    get(target, name){
        console.log('Nome está sendo requistado');
        return target[name];
    },

    set(target, name, value){
        console.log('Nome está sendo setado');
        target[name] = value;
        return target[name];
    }
});

// provavelmente assim que faz um stub ou mock
// FODA!!
console.log(obj2.teste());

let proxy2 = new Proxy(obj2, {
    get(target, teste){
        console.log('função teste sendo executada');
        return target[teste] = function(){
            return 'stubbing a function';
        };
    },
});

console.log(proxy2.teste());
obj2.teste = obj2.teste;

