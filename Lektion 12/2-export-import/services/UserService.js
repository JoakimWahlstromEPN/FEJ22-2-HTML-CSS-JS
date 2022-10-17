export default class UserService {
  constructor() {}

  static signUp(userObj) {
    console.log('registering a new user');
    console.log(userObj)
  }

  static signIn(email, password) {
    console.log(`signing in the user`)
    console.log(email, password)
  }
}