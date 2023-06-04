const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose'); 
const app = express();
 
// Import the router module
const router = require('../routes/index');

// Mount the router in the Express app
app.use('/', router);
describe('Test suite 1:',()=>{
  test('test 1: ', async()=>{
      const res = await request(app).get('/')
      expect(res.statusCode).toEqual(200)
  })
  test('test 2: ',async ()=>{
      const res = await request(app).get('/1234')
      expect(res.statusCode).toEqual(404)
  })
})

describe('Test suite 2:', () => {
test('test 3: Register user', async () => {
    const userData = {
      email: 'test@example.com',
      username: 'testuser',
      password: 'password123',
      passwordConf: 'password123',
      exam1: 99,
      exam2: 90,
      exam3: 95
    };

    const res = await request(app)
      .post('/')
      .send(userData);

      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual("You are registered. You can login now.");
  });
})
