module.exports = User

function User(username) {
  this.username = username || 'anonymous'
}
User.prototype.sayHello = function (says) {
  return this.username + ' says ' + (says || 'hello')
}
