<h1 style="background-color: #7B68EE; color: white; padding: 10px; border-radius: 5px;">🎬 Movie Application</h3>

This is a full-stack movie application that allows users to sign up, log in, view movies, and manage their movie collection. The application is built using React for the front end and a Node.js/Express back end.

![MoviesDB](/client/public/cover.png)

## 🌐 Deployment

- **Front End**: Deployed to [Vercel](https://movies-nine-lemon.vercel.app/)
- **Back End**: Deployed to [Render](https://movies-e6nm.onrender.com)

<h2 style="background-color: #7B68EE; color: white; padding: 10px; border-radius: 5px;">📑 Table of Contents</h2>

- [🌐 Deployment](#-deployment)
- [✨ Features](#-features)
- [🛠️ Technologies](#️-technologies)
  - [⚛️ Front End](#️-front-end)
  - [🟢 Back End](#-back-end)
- [⚙️ Setup](#️-setup)
- [⚛️ Front End](#️-front-end-1)
  - [🔧 Context](#-context)
- [🟢 Back End](#-back-end-1)
  - [🔌 API Endpoints](#-api-endpoints)
    - [👤 User Endpoints](#-user-endpoints)
    - [🎬 Movie Endpoints](#-movie-endpoints)
- [📜 Conclusion](#-conclusion)

---

## ✨ Features

- 🔐 User authentication (sign up, log in, log out)
- 🎥 View a list of movies
- 📄 View movie details
- ✏️ Add, edit, and delete movies (authenticated users only)
- 📱 Responsive design

---

## 🛠️ Technologies

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=for-the-badge) ![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge&?style=flat-square)

<br>

### ⚛️ Front End

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![React Router](https://img.shields.io/badge/react_router-%23CA4245.svg?style=for-the-badge&logo=react-router&logoColor=white)
- ![Axios](https://img.shields.io/badge/axios-%2300A1F1.svg?style=for-the-badge&logo=axios&logoColor=white)
- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
- ![Sass](https://img.shields.io/badge/Sass-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white)

### 🟢 Back End

<!-- ### 🟢 Back End -->

- ![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![MongoDB](https://img.shields.io/badge/mongodb-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
- ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
- ![Passport](https://img.shields.io/badge/passport-%234E4E4E.svg?style=for-the-badge&logo=passport&logoColor=white)
- ![bcrypt](https://img.shields.io/badge/bcrypt-%23F7B93E.svg?style=for-the-badge&logo=bcrypt&logoColor=white)
- ![cors](https://img.shields.io/badge/cors-%23E34F26.svg?style=for-the-badge&logo=cors&logoColor=white)
- ![nodemon](https://img.shields.io/badge/nodemon-%2376D04B.svg?style=for-the-badge&logo=nodemon&logoColor=white)

---

## ⚙️ Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Install API dependencies:

   ```sh
   npm run install-api
   ```

3. Install client dependencies:

   ```sh
   npm run install-client
   ```

4. Start the Development Servers for Both API and React:
   ```sh
   npm run dev
   ```

---

## ⚛️ Front End

The front end of the application is built using React. It includes the following main components:

- **App.jsx**: The main entry point of the application.
- **Layout.jsx**: The layout component that includes the header, footer, and main content area.
- **Navbar.jsx**: The navigation bar component.
- **Login.jsx**: The login form component.
- **Signup.jsx**: The signup form component.
- **MovieDetails.jsx**: The component to view movie details.
- **Dashboard.jsx**: The dashboard component for authenticated users to manage their movies.

### 🔧 Context

- **UserContext**: Provides user authentication state and methods.
- **MoviesContext**: Provides movie data and methods to manage movies.

## 🟢 Back End

The back end of the application is built using Node.js and Express. It includes the following main features:

- **🔐 User Authentication**: Sign up, log in, and log out using JWT.
- **🎬 Movie Management**: CRUD operations for movies.

---

### 🔌 API Endpoints

The base URL for all endpoints is:

- **Development**: <span style="color: #ffffff; background-color: #7B68EE; padding: 4px 8px; border-radius: 3px;"><a href="http://localhost:4000/api/v1/" style="color: #ffffff;">http://localhost:4000/api/v1/</a></span>
  <br>
- **Production**: <span style="color: #ffffff; background-color: #7B68EE; padding: 4px 8px; border-radius: 3px;"><a href="https://your-production-url.com/api/v1/" style="color: #ffffff;">https://movies-e6nm.onrender.com/api/v1/</a></span>

<br>

#### 👤 User Endpoints

- **POST /signup**: Sign up a new user.

  - Request body: `{ email, password }`
  - Response: `{ token, user }`

- **POST /login**: Log in an existing user.

  - Request body: `{ email, password }`
  - Response: `{ token, user }`

- **GET /dashboard**: Access the user dashboard (authenticated users only).
  - Response: `{ user, movies }`

#### 🎬 Movie Endpoints

- **GET /movies**: Get a list of all movies.

  - Response: `[ { movie1 }, { movie2 }, ... ]`

- **GET /movies/:id**: Get details of a specific movie.

  - Response: `{ movie }`

- **POST /movies**: Add a new movie (authenticated users only).

  - Request body: `{ title, description, ... }`
  - Response: `{ movie }`

- **PUT /movies/:id**: Edit an existing movie (authenticated users only).

  - Request body: `{ title, description, ... }`
  - Response: `{ movie }`

- **DELETE /movies/:id**: Delete a movie (authenticated users only).
  - Response: `200 OK`

---

## 📜 Conclusion

This movie application provides a full-stack solution for managing a movie collection with user authentication. The front end is built with React, and the back end is built with Node.js and Express. The application includes features for viewing, adding, editing, and deleting movies, with user authentication to protect certain actions.
