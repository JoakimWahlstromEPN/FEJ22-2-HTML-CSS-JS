// console.log(window)
// console.log(document)

const p1 = document.getElementsByTagName('p')
// console.log(p1)

const p2 = document.getElementsByClassName('paragraph')
// console.log(p2)

const p3 = document.getElementById('para')
// console.log(p3)

const q1 = document.querySelector('p');
// console.log(q1)
const q2 = document.querySelectorAll('p');
// console.log(q2)


// q2.forEach(node => {
//   console.log(node)
// })

const q3 = document.querySelector('#para')
// console.log(q3)


// console.log(q3.nextElementSibling)

const hej = document.querySelector('#hej')
console.log(hej)

// console.log(hej.parentElement)

const parent = hej.parentNode

const error = parent.querySelector('.error')
error.innerText = 'Ett nytt meddlande'