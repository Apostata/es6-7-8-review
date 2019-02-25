class Animal {
    constructor(kind, sound){
        this.kind = kind;
        this.sound = sound;
    }

    hello(){
        console.log(`${this.sound} eu sou um ${this.kind}`);
    }

    get name(){ // getter
        return this._name; 
    }

    set name(nome){
        this._name = `${this.kind} ${nome}`;
    }
}

let duck = new Animal('pato', 'Quack!');
duck.name ='Donald';
console.log(duck.name);
