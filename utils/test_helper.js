const User = require('../models/users')

const initialUsers = [
  {
    "username": "hellas",
    "name": "Arto Hellas",
    "password": "123456"
  },
  {
    "username": "mluukkai",
    "name": "Matti Luukkainen",
    "password": "123456"
  }
]

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
  usersInDb,
  initialUsers
}
