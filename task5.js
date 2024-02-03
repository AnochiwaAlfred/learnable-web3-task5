

class Kingdom {
    constructor(name, classification, warmBlooded, backbone, sound, habitat, numberOfLegs) {
        this.name = name;
        this.classification = classification;
        this.warmBlooded = warmBlooded;
        this.backbone = backbone;
        this.sound = sound;
        this.habitat = habitat;
        this.numberOfLegs = numberOfLegs;
        if (this.constructor==Kingdom){
            throw new Error("Kingdom cannot be called or instantiated")
        }
    }


    setName(name) {
      this.name = name;
    }

    setNumberOfLegs(numberOfLegs) {
        this.numberOfLegs = numberOfLegs;
    }

    getName() {
        return this.name;
    }

    getClassification() {
        return this.name;
    }

    getHabitat() {
        return this.name;
    }

    getSound() {
        return this.sound;
    }


    displayKingdom() {
      console.log(`The animal ${this.name} is classified as ${this.classification}, is ${this.warmBlooded ? "Warm Blooded" : "Cold Blooded"}, has ${this.backbone ? "Backbone" : "No Backbone"} and has ${this.numberOfLegs>0 ? `${this.numberOfLegs} Legs` : "No Legs"}`);
      console.log(`Habitat: ${this.habitat}`)
      console.log(`Sound: ${this.sound}`)
      console.log(`Number of Legs: ${this.numberOfLegs}`)
    }
        

  }
  



  class Anthropoda extends Kingdom {
    constructor(name) {
      super(name, "Anthropoda", false, false, "Chirp", "Land, Water", 6);
      if (this.constructor==Anthropoda){
        throw new Error("Kingdom cannot be called or instantiated")
    }
    }
    
  }
  
  class Fish extends Kingdom {
    constructor(name) {
      super(name, "Fish", false, true, "Bubble", "Water", 0);
      if (this.constructor==Fish){
        throw new Error("Kingdom cannot be called or instantiated")
    }
    }
  }
  
  class Amphibia extends Kingdom {
    constructor(name) {
      super(name, "Amphibia", false, true, "Croak", "Land, Water", 4);
      if (this.constructor==Amphibia){
        throw new Error("Kingdom cannot be called or instantiated")
    }
    }
  }
  
  class Reptile extends Kingdom {
    constructor(name) {
      super(name, "Reptiles", false, true, "Hiss", "Land", 4);
      if (this.constructor==Reptile){
        throw new Error("Kingdom cannot be called or instantiated")
    }
    }
  }
  
  class Ave extends Kingdom {
    constructor(name) {
      super(name, "Aves", true, true, "Chirp, Tweet", "Land, Air, Water", 2);
      if (this.constructor==Ave){
        throw new Error("Kingdom cannot be called or instantiated")
    }
    }
  }
  
  class Mammal extends Kingdom {
    constructor(name) {
      super(name, "Mammals", true, true, sound, "Land, Air, Water", 4);
      if (this.constructor==Mammal){
        throw new Error("Kingdom cannot be called or instantiated")
    }
    }
  }
  


  const butterfly = new Anthropoda("Butterfly");
  const goldfish = new Fish("Goldfish");
  const frog = new Amphibia("Frog");
  const snake = new Reptile("Adder");
  const eagle = new Ave("Eagle");
  const lion = new Mammal("Lion", sound="Roar");
  

  butterfly.displayKingdom();
  goldfish.displayKingdom();
  frog.displayKingdom();
  snake.displayKingdom();
  eagle.displayKingdom();
  lion.displayKingdom();
  