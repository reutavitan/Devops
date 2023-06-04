const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Import the router module
const router = require('../routes/index');

// Mount the router in the Express app
app.use('/', router);

describe('Test suite 1:', () => {
  test('test 1: ', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(500);
  });

  test('test 2: ', async () => {
    const res = await request(app).get('/1234');
    expect(res.statusCode).toEqual(404);
  });
});

describe('Test suite 2:', () => {
  test('test 3: Register user', async () => {
    const userData = {
      email: 'test@example.com',
      username: 'testuser',
      password: 'password123',
      passwordConf: 'password123',
      exam1: 99,
      exam2: 90,
      exam3: 95,
    };

    const res = await request(app).post('/').send(userData);

    expect(res.statusCode).toEqual(500);
  });
  
  test('test 4: Login user', async () => {
    // Create a user in the database
    const user = new User({
      unique_id: 1,
      email: 'test@example.com',
      username: 'testuser',
      exam1: 99,
      exam2: 90,
      exam3: 95,
      password: 'password123',
      passwordConf: 'password123'
    });
    await user.save();

    const loginData = {
      email: 'test@example.com',
      password: 'password123'
    };

    const res = await request(app)
      .post('/login')
      .send(loginData);

    expect(res.statusCode).toEqual(500);
    
  }, 30000); // Set the timeout value to 15000ms (15 seconds)
  
  test('test 5: Access profile', async () => {
    // Create a user in the database
    const user = new User({
      unique_id: 1,
      email: 'test@example.com',
      username: 'testuser',
      exam1: 80,
      exam2: 90,
      exam3: 95,
      password: 'password123',
      passwordConf: 'password123'
    });
    await user.save();

    const agent = request.agent(app);

    // Login the user
    await agent.post('/login').send({ email: 'test@example.com', password: 'password123' });

    // Access the profile route
    const res = await agent.get('/profile');

    expect(res.statusCode).toEqual(500);
    expect(res.body.name).toEqual('testuser');
    expect(res.body.email).toEqual('test@example.com');
    expect(res.body.exam1).toEqual(80);
    expect(res.body.exam2).toEqual(90);
    expect(res.body.exam3).toEqual(95);
  });

  test('test 6: Logout user', async () => {
    // Create a user in the database
    const user = new User({
      unique_id: 1,
      email: 'test@example.com',
      username: 'testuser',
      exam1: 80,
      exam2: 90,
      exam3: 95,
      password: 'password123',
      passwordConf: 'password123'
    });
    await user.save();

    const agent = request.agent(app);

    // Login the user
    await agent.post('/login').send({ email: 'test@example.com', password: 'password123' });

    // Logout the user
    const res = await agent.get('/logout');

    expect(res.statusCode).toEqual(500);

});

});
