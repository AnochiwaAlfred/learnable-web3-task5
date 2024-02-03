

class Mammal{
    constructor(hasHair){
        this.hasHair=hasHair;
    }
    eat(){
        console.log("I am eating")
    }
    numberOfEyes = 2;
}


const m = new Mammal()
m.eat()

class Human extends Mammal{
    numberOfLegs = 2;
    constructor(hasHair){
        super(hasHair)
    }
}

const h = new Human
h.eat()


class Bird extends Mammal{
    hasFeather=true;
}

const dove = new Bird()
dove.eat()