function Animal(name) {
  this.name = name
}

Animal.prototype.makeSound = function() {
  return `${this.name} makes a sound!`
}

const animal = new Animal('Bosse')

console.log(animal.makeSound())

function Dog(name, age) {
  Animal.call(this, name)
  this.age = age
}

Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.constructor = Dog

const dog = new Dog('Ove', 13)

console.log(dog)
console.log(dog.makeSound())