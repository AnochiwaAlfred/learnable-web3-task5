
// An abstract class is a class that all other class inherited. A base class. But the class itself must not be instantiated.
// There's no direct way to abstract a class in JS, what we do is to put a check in the constructor class that throws an error 
// when someone tries to create a direct instance



class Mammal{
    constructor(){
        if (this.constructor==Mammal){
            throw new Error("Mammal cannot be called or instantiated")
        }
    }
}

try{
    const mammal = new Mammal()
}catch (error){
    console.log('Error:',error.message)
}

class Human extends Mammal{
    constructor(name){
        super();  // Call the constructor of the parent class
        this.name=name
    }
    run(){
        console.log(`${this.name} can run`)
    }
}

human1 = new Human("John")
human1.run()
