// if(påstående) { // == sant
//   gör någonting här
// }

// let number = 13;
// let string = '13';

// console.log(number == 13)
// console.log(number === string)

const names = ['Joakim', 'Hans']


if(names.length) {
  // console.log('arrayen names är längre än 0')
}

// 0 === false
// 1 === true

const isLoggedIn = true

// if(isLoggedIn) {
//   console.log('användaren är inloggad')
// }
// if(!isLoggedIn) {
//   console.log('användaren INTE är inloggad')
// }

let name = 'Nisse';

if(name == 'Joakim') {
  console.log('namnet är Joakim');
}
else if(name == 'Johannes') {
  console.log('namnet är Johannes');
}
else if(name == 'Johannes') {
  console.log('namnet är Johannes');
}
else {
  console.log('okänt namn')
}


let age = 17;

let drink = age >= 18 
? 'Beer' 
: 'Coke'

console.log(drink)

let color = 'orange'

console.log(`Welcome! here is your ${age >= 18 ? 'Beer' : 'Coke'}`)

// Switch

switch(color) {

  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  case 'orange':
    console.log('color is orange');
    break;
  case 'white':
    console.log('color is white');
    break;
  case 'pink':
    console.log('color is pink');
    break;
  case 'black':
    console.log('color is black');
    break;

  default:
    console.log('color unknown!')

}


let nr = 11

switch(nr) {
  case '2':
    console.log('det är en text 2')
    break;
  case 2:
    console.log('det är siffran 2')
}


switch(true) {

  case (nr > 0 && nr < 10):
    console.log('nr är mindre än 10 men större än 0')
    break;
  case (nr > 10):
    console.log('nr är större än 10')

}