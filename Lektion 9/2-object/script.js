// key: value

const person = {
  firstName: 'Joakim',
  lastName: 'Wahlström',
  age: 35,
  height: 177,
  address: {
    city: 'Västerås',
    postalCode: 72343,
    street: 'hemma'
  },
  phoneNumbers: [0734456543, 07602676543],
  isActive: true
}


const json = JSON.stringify(person)

console.log(person)
// console.log(json)

const js = JSON.parse(json)

// console.log(js)
person.firstName = 'Nisse'
person.email = 'joakim@mail.com'

let key = 'lastName'

// console.log(person[key])


// destructing

// const firstName = person.firstName
// const lastName = person.lastName

const { firstName: fName, lastName, age } = person

console.log(fName, lastName, age)
