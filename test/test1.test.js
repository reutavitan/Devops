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
      expect(res.statusCode).toEqual(500)
  })
  test('test 2: ',async ()=>{
      const res = await request(app).get('/1234')
      expect(res.statusCode).toEqual(404)
  })
})

/*

describe('Testing the Express Router', () => {
  // Test the GET '/' route
  it('should respond with status 200 and render index.ejs', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  / Test the POST '/' route with valid data
  it('should respond with success message and status 200', async () => {
    const response = await request(app)
      .post('/')
      .send({
        email: 'test@example.com',
        username: 'testuser',
        password: 'password123',
        passwordConf: 'password123',
        exam1: 80,
        exam2: 90,
        exam3: 95,
      });
    expect(response.status).toBe(200);
    expect(response.body.Success).toBe('You are registered, You can login now.');
  });

  // Test the POST '/' route with invalid data
  it('should respond with error message for invalid data', async () => {
    const response = await request(app)
      .post('/')
      .send({
        email: 'test@example.com',
        username: 'testuser',
        password: 'password123',
        passwordConf: 'password123',
        exam1: 120, // Invalid value
        exam2: -10, // Invalid value
        exam3: 105, // Invalid value
      });
    expect(response.status).toBe(200);
    expect(response.body.Success).toBe('password is not matched or exam not valid');
  });

  // Test the GET '/login' route
  it('should respond with status 200 and render login.ejs', async () => {
    const response = await request(app).get('/login');
    expect(response.status).toBe(200);
    expect(response.text).toContain('login.ejs'); // Assuming the rendered template contains 'login.ejs'
  });

  // Test the POST '/login' route with valid credentials
  it('should respond with success message and status 200', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'test@example.com',
        password: 'password123',
      });
    expect(response.status).toBe(200);
    expect(response.body.Success).toBe('Success!');
  });

  // Test the POST '/login' route with invalid credentials
  it('should respond with error message for wrong password', async () => {
    const response = await request(app)
      .post('/login')
      .send({
        email: 'test@example.com',
        password: 'wrongpassword',
      });
    expect(response.status).toBe(200);
    expect(response.body.Success).toBe('Wrong password!');
  });

  // Test the GET '/profile' route
  it('should respond with status 200 and render data.ejs', async () => {
    const response = await request(app).get('/profile');
    expect(response.status).toBe(200);
    expect(response.text).toContain('data.ejs'); // Assuming the rendered template contains 'data.ejs'
  });

  // Test the GET '/logout' route
  it('should respond with redirect and destroy the session', async () => {
    const response = await request(app).get('/logout');
    expect(response.status).toBe(302); // Redirect status code
  });
  // Import the necessary modules and define the router

// ...

// Define your test cases

// ...

// Close the MongoDB connection after all test cases have finished running
afterAll(async () => {
  mongoose.disconnect();



});

});*/
