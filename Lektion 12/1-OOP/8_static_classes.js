class UserService {
  constructor(uri) {
    this.baseUri = uri
  }

  static signUp(user) {
    console.log('registering a new user');
    console.log(user)
  }

  static signIn(email, password) {
    console.log(`signing in the user with ${email} and ${password}`)
  }
}

// const userService = new UserService()

// userService.signUp({ firstName: 'Joakim', lastName: 'Wahlström' })
// userService.signIn('joakim@mail.com', 'BytMig123')

UserService.signUp({ firstName: 'Joakim', lastName: 'Wahlström' })
UserService.signIn('joakim@mail.com', 'BytMig123')