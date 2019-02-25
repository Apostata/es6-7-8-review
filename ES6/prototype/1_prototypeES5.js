function Animal(kind, sound){ //função construtora
    this.kind = kind;
    this.sound = sound;
}

const dog = new Animal('cachorro', 'Auf!');
const cat = new Animal('gato', 'Miau!');

Animal.prototype.hello = function(){
    console.log(`${this.sound} eu sou um ${this.kind}`);
}