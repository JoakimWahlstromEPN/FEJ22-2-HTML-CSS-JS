const regForm = document.querySelector('#regForm');

const validateText = (input) => {
  // const input = document.getElementById(id)

  if(input.value.trim() === '') {
    return setError(input, 'Du måste ange ett namn')
  }
  if(input.value.length < 2) {
    return setError(input, 'Ett namn kan inte vara kortare än 2 bokstäver')
  }


  return setSuccess(input)
}

const validateEmail = (input) => {
  // const input = document.getElementById(id)

  const regEx = /^[\w-]+(\.[\w\-]+)*@([A-Za-z0-9-]+\.)+[A-Za-z]{2,6}$/

  if(!regEx.test(input.value)) {
    return setError(input, 'Yout need to enter a valid email address')
  }

  return setSuccess(input)
}

const validateCheck = (checkbox) => {
  // const checkbox = document.getElementById(id);

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

const validate = (input) => {
  switch(input.type) {
    case 'text':  return validateText(input)
    case 'email': return validateEmail(input)
    case 'checkbox': return validateCheck(input)
    default: break;
  }
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
  // validateCheck('terms')
  // validateEmail('email')
  // validateText('lastName')
  // validateText('firstName')


  // if(validateCheck('terms') &&
  // validateEmail('email') &&
  // validateText('lastName') &&
  // validateText('firstName')) {
  //   console.log('validering ok!')
  // }
  // else {
  //   console.log('någonting är fel')
  // }


  const errors = [];
  for(let i = 0; i < regForm.length; i++) {
    errors[i] = validate(regForm[i])
  }
  // console.log(errors)
  if(errors.includes(false)) return


  const user = {
    id: Date.now().toString(),
    firstName: this.firstName.value,
    lastName: this.lastName.value,
    email: this.email.value
  }

  console.log(user)

})
