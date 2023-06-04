# Devops Application

The Devops application is a web-based platform built using Node.js, Express, MongoDB, EJS, and a test suite. It provides user registration, login, and profile management functionality.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/reutavitan/Devops.git
   ```

2. Install the dependencies:

   ```
   cd Devops
   npm install
   ```

3. Set up the MongoDB database:

   - Make sure you have MongoDB installed and running.
   - Update the MongoDB connection URL in `server.js` to point to your MongoDB database.

4. Start the application:

   ```
   node server.js
   ```

   The application should now be running on http://localhost:3000.

## Features

- User Registration: Users can create an account by providing their email, username, password, and exam scores. The application validates the input and stores the user data in the MongoDB database.

- User Login: Registered users can log in to their accounts using their email and password. The application verifies the credentials and provides access to the user's profile.

- Profile Management: Authenticated users can view and update their profile information, including their username, email, and exam scores.

- Test Suite: The application includes a test suite to ensure the functionality of routes and API endpoints. The tests are implemented using Jest and Supertest.

## Folder Structure

The application follows a standard folder structure:

- `views/`: Contains the EJS templates for rendering the HTML views.
- `public/`: Stores static assets such as stylesheets, images, and client-side JavaScript files.
- `routes/`: Includes the Express router modules for handling different routes.
- `models/`: Defines the Mongoose models for the application's data.
- `test/`: Contains the test suite for automated testing.

## Testing

The application includes a comprehensive test suite to ensure the reliability of the implemented features. To run the tests, use the following command:

```
npm test
```

The test suite leverages Jest and Supertest for testing the routes and API endpoints of the application. It covers registration, login, profile management, and error handling scenarios.

## Contributing

Contributions to this project are welcome! If you encounter any issues, have suggestions for improvements, or want to add new features, please feel free to create a new issue or submit a pull request.
 

## Acknowledgments

This application was created as part of the DevOps course by Reut Avitan and Tair Mazuz, demonstrating the use of Node.js, Express, MongoDB, EJS, and automated testing.

Feel free to update and customize this README file based on your application's specific features, instructions, and licensing information.
