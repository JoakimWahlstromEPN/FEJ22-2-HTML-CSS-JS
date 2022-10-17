import User from "./models/UserModel.js"
import UserService from "./services/UserService.js"

import { validatePassword as va, sendSMS } from './functions/Functions.js'


if(!va('BytMig123')) {
  console.log('lösenordet måste innehålla en siffra')
} else {
  const user = new User('Joakim', 'Wahlström', 'joakim@mail.com', 'BytMig123')
  UserService.signUp(user)
  UserService.signIn(user.email, user.password)
}

// sendSMS()