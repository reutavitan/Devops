const request = require('supertest')
const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/user')

const app = express()

// Import the router module
const router = require('../routes/index')

// Mount the router in the Express app
app.use('/', router)

describe('Test suite 1:', () => {
  test('test 1: ', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
  })

  test('test 2: ', async () => {
    const res = await request(app).get('/1234')
    expect(res.statusCode).toEqual(404)
  })
})

describe('Test suite 3:', () => {
  beforeAll(() => {
    jest.setTimeout(30000) // Set the timeout value to 30000ms (30 seconds) for the entire suite
  })
  test('test 3: Register user', async () => {
    const userData = {
      email: 'test1@example.com',
      username: 'testuser1',
      password: 'password1234',
      passwordConf: 'password1234',
      exam1: 99,
      exam2: 90,
      exam3: 95
    }

    const res = await request(app).post('/').send(userData)
    expect(res.statusCode).toEqual(500)
  })

  test('test 4: Login user', async () => {
    const loginData = {
      email: 'test@example.com',
      password: 'password123'
    }

    const res = await request(app)
      .post('/login')
      .send(loginData)

    expect(res.statusCode).toEqual(500)
  })

  test('test 5: Access profile', async () => {
    const agent = request.agent(app)

    // Login the user
    await agent.post('/login').send({ email: 'test@example.com', password: 'password123' })

    // Access the profile route
    const res = await agent.get('/profile')

    expect(res.statusCode).toEqual(500)
  })
})
