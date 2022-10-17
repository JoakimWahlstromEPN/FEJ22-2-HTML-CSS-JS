class Animal {            // Super
  constructor(name) {
    this.name = name
  }

  makeSound() {
    return `${this.name} makes a sound!`
  }
}

class Dog extends Animal {
  constructor(name, age) {
    super(name)
    this.age = age
  }

  makeSound() {
    return `${super.makeSound()} ${this.name} barks!`
  }
}


const animal = new Animal('Bosse')
console.log(animal.makeSound())

const dog = new Dog('Göran', 13)

console.log(dog)
console.log(dog.makeSound())