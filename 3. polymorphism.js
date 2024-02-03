
// Polymorphism is the concept wherein a class can portray different properties to different objects of the same class


class Shape{
    constructor(){
        if(this.constructor==Shape){
            throw new Error("This class cannot be implemented directly") // Abstract class
        }
    }
    area(){
        throw new Error("This cannot be implemented directly") // Abstract method
    }
}

class Circle extends Shape{
    constructor(radius){
        super()
        this.radius=radius
    }

    area(){
        const area = Math.PI * (this.radius**2)
        return area
    }
}

class Square extends Shape{
    constructor(length){
        super()
        this.length=length
    }

    area(){
        const area = (this.length**2)
        return area
    }
}

cup = new Circle(45)
box = new Square(45)
console.log("Area of a circle", cup.area())
console.log("Area of a square", box.area())