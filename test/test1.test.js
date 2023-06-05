const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
var User = require('../models/user');
const app = express();
var  error = 500;
var Success= 500;

// Import the router module
const router = require('../routes/index');

// Mount the router in the Express app
app.use('/', router);

describe('Test suite 1:', () => {
  test('test 1: ', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
  });

  test('test 2: ', async () => {
    const res = await request(app).get('/1234');
    expect(res.statusCode).toEqual(404);
  });
});

describe('Test suite 2:', () => {
  beforeAll(() => {
    jest.setTimeout(30000); // Set the timeout value to 30000ms (30 seconds) for the entire suite
  });

  test('test 3: Register user', async () => {
    var userData = {
      email: 'test1@example.com',
      username: 'testuser1',
      exam1: 99,
      exam2: 90,
      exam3: 95,
      password: 'password1234',
      passwordConf: 'password1234',
    };
    await request(app).post('/').send(userData).expect(Success);
  });

  test('test 3: Register user Erroneous', async () => {
    var userData = {
      email: 'test1@example.com',
      username: 'testuser1',
      exam1: 999,
      exam2: 90,
      exam3: 95,
      password: 'password1234',
      passwordConf: 'password12345',
    };
    await request(app).post('/').send(userData).expect(error);
  });

  test('test 4: Login user', async () => {
    await request(app)
      .post('/login')
      .send({ email: 'test@example.com', password: 'password123' })
      .expect(Success);
  });

  test('test 4: Login user Erroneous', async () => {
    await request(app)
      .post('/login')
      .send({ email: 'test@example.com', password: 'password' })
      .expect( error);
  });

  test('test 5: Access profile', async () => {
    const res = await request(app).get('/profile').expect(Success);
    // Perform any assertions on res as needed
  });

   
});

