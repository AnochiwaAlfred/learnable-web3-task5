# Learnable '23 Task 5 - Animal Kingdom Classification in JavaScript

This Task models the classification of animals in the Kingdom Animalia using OOP principles taught in classes for this week. A base class `Kingdom` and other subclasses  like Arthropoda, Fish, Amphibia, Reptiles, Aves, and Mammals inherit from it.

- This code can be run with NodeJS

## Classes

### Kingdom

- The base class for Animal Kingdom classification.
- Properties: `name`, `classification`, `warmBlooded`, `backbone`, `sound`, `habitat`, `numberOfLegs`.
- Methods: `setName`, `setNumberOfLegs`, `getName`, `getClassification`, `getHabitat`, `getSound`, `displayKingdom`.

### Arthropoda, Fish, Amphibia, Reptile, Ave, Mammal

- Subclasses which represents specific animal categories.

## How to Use

1. Create instances of animals using any of the subclasses (e.g., `const butterfly = new Arthropoda("Butterfly");`).

2. You can access information about the animals using the methods like `getName`, `getClassification`, `getSound`, `getHabitat`, etc. This demonstrates **Polymorphism** as the response varies on the instance.

3. You can use the  `displayKingdom` method to display the classification, characteristics, habitat, and sound of each animal.

4. For objects that their `numberOfLegs` differ from the default value specified in the class, you can use the `setNumberOfLegs` method to correct it. There also exist a setName method to change the name of an instance. This demonstrates **Encapsulation**

## Example

```javascript
const butterfly = new Arthropoda("Butterfly");
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
