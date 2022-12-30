export default class Validator {
  constructor(username) {
    this.username = username;
  }

  validateUserName() {
    const login = this.username;
    return /^[^\d-_][\w-_\d]+[^\d-_]$/i.test(login);
  }
}