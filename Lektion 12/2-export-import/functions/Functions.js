export function validatePassword(value) {
  const regEx = /\d/

  return regEx.test(value)
}

export const sendSMS = () => {
  console.log('sending sms')
}