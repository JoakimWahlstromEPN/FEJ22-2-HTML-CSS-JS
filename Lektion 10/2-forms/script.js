const regForm = document.querySelector('#regForm');

const validateText = (id) => {
  const input = document.getElementById(id)

  if(input.value.trim() === '') {
    return setError(input, 'Du måste ange ett namn')
  }
  if(input.value.length < 2) {
    return setError(input, 'Ett namn kan inte vara kortare än 2 bokstäver')
  }


  return setSuccess(input)
}

const validateEmail = (id) => {
  const input = document.getElementById(id)

  const regEx = /^[\w-]+(\.[\w\-]+)*@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/

  if(!regEx.test(input.value)) {
    return setError(input, 'Yout need to enter a valid email address')
  }

  return setSuccess(input)
}

const validateCheck = (id) => {
  const checkbox = document.getElementById(id);

  if(!checkbox.checked) {
    return setError(checkbox, 'you need to accept the terms')
  }

  return setSuccess(checkbox)
}


const setError = (input, textMessage) => {
  input.classList.add('is-invalid');
  input.classList.remove('is-valid');
  input.focus()
  
  const parent = input.parentElement;
  parent.querySelector('.invalid-feedback').innerText = textMessage

  return false
}

const setSuccess = (input) => {
  input.classList.remove('is-invalid');
  input.classList.add('is-valid');
  return true
}


regForm.addEventListener('submit', function(e) {
  e.preventDefault();

  // const firstName = document.querySelector('#firstName').value;
  
  // console.log(regForm[1].value)
  // console.log(e.target[0].value)
  // console.log(regForm.firstName.value)
  // console.log(regForm['address'].value)
  // console.log(this.firstName.value)

  // console.log(this)
  // console.log(firstName)


  // validateFirstName()
  // validateLastName()
  validateCheck('terms')
  validateEmail('email')
  validateText('lastName')
  validateText('firstName')

  if(validateText('firstName')) {
    console.log('validering klar')
  }


})
