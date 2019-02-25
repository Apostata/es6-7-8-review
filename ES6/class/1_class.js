function Animal1(kind, sound){ //função construtora
    this.kind = kind;
    this.sound = sound;
}

Animal1.prototype.hello = function(){
    console.log(`${this.sound} eu sou um ${this.kind}`);
}

class Animal2 {
    constructor(kind, sound){
        this.kind = kind;
        this.sound = sound;
    }

    hello(){
        console.log(`${this.sound} eu sou um ${this.kind}`);
    }
}

const dog = new Animal1('cachorro', 'Auf!');
const cat = new Animal1('gato', 'Miau!');
const duck = new Animal2('pato', 'Quack!');