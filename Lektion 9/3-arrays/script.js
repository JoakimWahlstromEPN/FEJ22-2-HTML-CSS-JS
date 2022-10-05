
// const multiArray = ['Joakim', 35, 'joakim@mail.com', true]

const users = [
  { firstName: 'Joakim', lastName: 'Wahlström', age: 35, isActive: true },
  { firstName: 'Hans', lastName: 'Mattin-Lassei', age: 38, isActive: false },
  { firstName: 'Johannes', lastName: 'Freed', age: 35, isActive: true },
]

const names = ['Joakim', 'Hans', 'Johannes'];

// console.log(names)
// console.log(names[0])

// names[5] = 'Jeanette'

names.unshift('Jeanette') // lägg till i början
// console.log(names)
names.shift() // ta bort i början
// console.log(names)

names.push('Jeanette') // lägg till i slutet
// console.log(names)
names.pop() // Ta bort i slutet
// console.log(names)

// console.log(names.indexOf('Hans'))
// names[names.indexOf('Hans')] = 'nisse'


// SPLICE - tar bort och/eller lägger till ett värde från en specifik position
names.splice(1, 1) // ta bort 1 från index 1
names.splice(1, 0, 'Jeanette', 'Hans') // tar bort 0 och lägger till Jeanette & Hans
names.splice(1, 2, 'Colin') 

names.splice(names.indexOf('Colin'), 1, 'Hans')

// console.log(names.length)
// console.log(names)


const newArray = ['Jeanette', 'Colin', ...names]

// console.log(newArray)

const obj = {
  fName: 'Joakim',
  lName: 'Wahlström'
}

const obj2 = {
  email: 'joakim@mail.com',
  ...obj
}

// console.log(obj2)



// HIGH ORDER METHODS
const numbers = [1, 12, 2, 13, 4, 5, 16, 7, 8, 9, 10, 11 ]




const sum = numbers.reduce(function(acc, current) {
  // console.log('acc: ' + acc, 'current: ' + current)
  return acc + current
})


// filter()
const filteredArray = numbers.filter((num) => {
  return num < 6
})

const activeUsers = users.filter((user) => {
  return user.isActive
})

// console.log(activeUsers)


// map()
  const mappedArray = names.map((name) => {
    // return name.toUpperCase()
    return 'hello ' + name
  })

  // console.log(mappedArray)

// forEach()
numbers.forEach(num => {
  // console.log(num)
})

// console.log(numbers)


// names.sort()
// console.log(names)

// const strings = ['Ca', 'Bb', '1a', 'aa', 'bb']

// console.log(numbers)
// numbers.sort((a, b) => {
//   return a - b
// })
// console.log(numbers)

// console.log(strings)
// strings.sort()
// console.log(strings)


// console.log(users)

// users.sort((a, b) => {
//   return a.lastName.localeCompare(b.lastName)
// })
// console.log(users)

// for(let i = 0; i < names.length; i++) {
//   console.log(names[i])
// }

// for(name of names) {
//   console.log(name)
// }

let i = 98;

while(i < 5) {
  console.log('while: '+i)
  i++
}

// console.log(i)

do {
  console.log('do while: ' + i)
  i++
} while( i < 8)