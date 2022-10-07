
// function hej() {
//   console.log('hej på dig')
//   return null
// }

// const greet = function() {
//   return 'hej hej';
//   console.log('hur är läget?')
// }

// const test = hej()
// const test2 = greet()

// console.log(test)
// console.log(test2)


// if(test) {
//   console.log('vi fick någonting returnerat')
// }


let firstName = 'Joakim';

const greet = function(name) {
  console.log(`Hej ${name} hur är läget?`)
}


// greet('Johannes')
// greet(firstName)
// greet('Nisse')
// greet()


const calc = function(num1 = 0, num2 = 0, num3) {
  // console.log(num1, num2, num3)
  // if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
  //   return 'du måste skriva in ett nummer'
  // }
  let sum = 0
  if(num3) {
    sum = +num1 + +num2 + +num3
    return sum
  }
  sum = +num1 + +num2
  return sum
}

// console.log(calc(2, 4, 5))
// console.log(calc(2, 4))



// arrow functions

// const calc2 = (num1, num2) => {
//   return +num1 + +num2
// }

const calc2 = (num1 = 0, num2 = 0) => +num1 + +num2

// console.log(calc2(5,'5'))

const greet2 = name => `Hej ${name}`;

// console.log(greet2('Joakim'))


// console.log(this)

// methods - funktion som hör till ett objekt

const user = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  fullName() {
    return this.firstName + ' ' + this.lastName
  },
  arrow: () => {
    console.log('arrow function: ', this)
  },
  function: function() {
    console.log('regular function: ', this)
  }
}


// console.log(user.fullName())
// user.arrow()
// user.function()



// Callback functions

let names = ['Joakim', 'Johannes', 'Hans'];
names.forEach(name => {
  console.log(name)
})


/**
 * @param {number} nr1
 * @param {number} nr2
 * @param {function} cb
 */
const calc3 = (nr1 = 0, nr2 = 0, cb) => {
  let sum = +nr1 + +nr2;

  cb(sum)
}


calc3(10, 13, summan => {
  console.log(summan)
})

calc3(2,'5', sum => {})