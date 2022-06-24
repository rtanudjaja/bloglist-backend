
const supertest = require('supertest')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const app = require('../app')
const api = supertest(app)

const User = require('../models/user')

describe('when there is initially one user at db', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('sekret', 10)
    const user = new User({ username: 'root', passwordHash })

    await user.save()
  })

  test('creation succeeds with a fresh username', async () => {

  })

  test('creation fails with proper statuscode and message if username and password is not at least 3 characters long', async () => {

  })

  test('creation fails with proper statuscode and message if username already taken', async () => {

  })

  test('creation fails with proper statuscode and message if username already taken', async () => {

  })
})

afterAll(() => {
  mongoose.connection.close()
})