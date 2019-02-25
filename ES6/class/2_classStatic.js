class Animal {
    constructor(kind, sound){
        this.kind = kind;
        this.sound = sound;
    }

    hello(){
        console.log(`${this.sound} eu sou um ${this.kind}`);
    }

    static info(){
        console.log('Class to create Animals!');
    }
}

const duck = new Animal('pato', 'Quack!');