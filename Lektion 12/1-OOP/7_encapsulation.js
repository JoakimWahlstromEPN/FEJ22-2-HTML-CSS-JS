/*
  Getters / Setters
*/


// Utan getters och setters
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }

//   fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }


// const p1 = new Person('Joakim', 'Wahlström')
// console.log(p1.firstName)
// console.log(p1.lastName)
// console.log(p1.fullName())

// p1.fullName = 'Johannes Freed'
// console.log(p1.firstName)
// console.log(p1.lastName)
// console.log(p1.fullName)
// console.log(p1)


// getter

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }

//   get fullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const p1 = new Person('Joakim', 'Wahlström')
// console.log(p1.firstName)
// console.log(p1.lastName)
// console.log(p1.fullName)
// // console.log(p1)

// p1.fullName = 'Johannes Freed'
// console.log(p1.firstName)
// console.log(p1.lastName)
// console.log(p1.fullName)
// console.log(p1)


// setter

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  set fullName(value) {
    const parts = value.split(' ')
    this.firstName = parts[0]
    this.lastName = parts[1]

    document.body.innerText = `${this.firstName} ${this.lastName}`
  }

  get id() {
    return `id är: ${this._id}`
  }

  set id(value) {
    this._id = value
  }
}

const p1 = new Person('Joakim', 'Wahlström')
console.log(p1.firstName)
console.log(p1.lastName)
console.log(p1.fullName)
// // console.log(p1)

p1.fullName = 'Johannes Freed'
console.log(p1.firstName)
console.log(p1.lastName)
console.log(p1.fullName)
p1.id = 12345
console.log(p1)
console.log(p1.id)

