
// var firstName = 'Joakim'; // global deklarering

// var firstName = 'Johannes';




const name = 'Joakim Wahlström';


const person = {
  firstName: 'Joakim'
}
person.lastName = 'Wahlström'
const person2 = person;

const person3 = {
  firstName: 'Joakim'
}

// console.log(person == person3)
// console.log(person === person2)

// const persons = []

let lastName = 'Wahlström';
let lastName2 = 'Wahlström'
let lastName3 = lastName;

// console.log(lastName === lastName2)
// console.log(lastName === lastName3)


// console.log(lastName, name2)
// lastName = 'Freed';
// console.log(lastName, name2)


// console.log(person)
// console.log(person2)

// person.firstName = 'Johannes'

// console.log(person)
// console.log(person2)



const user = {...person}
// console.log(person, user)s
person.firstName = 'Nisse';
// console.log(person, user)

/*
  String    = Text, 'asd', '1234'
  Nubmer    = Heltal, decimaltal
  Boolean   = Sant/falskt, true/false
  null      = Tomt, (manuellt)
  undefined = Odefinierat, tomt (automatiskt)
  Object    = innehåller ett eller flera värden
  Array     = en lista med värden

*/

const test = String('hej')
const nr = Number(123)

// console.log(test.__proto__)

// console.log(nr.__proto__)
// console.log(Math)

let firstName = 'Joakim';
let age = 35;

let text = "Jag är \"bäst\" i 'hela' världen";
text = 'Jag är "bäst" i \'hela\' världen';
text = `Jag är "bäst" i 'hela' världen`

const fullName = (firstName, lastName) => {
  return firstName + ' ' + lastName
}

text = 'Jag heter ' + firstName + ' och jag är ' + age + ' år gammal.'
text = `Jag heter ${fullName('Joakim', 'Wahlström')} 
och jag är ${age + 5} år gammal.`

console.log(text)