# Personal Book Manager Backend

A secure Node.js and Express backend for the Personal Book Manager application. It provides authentication, protected routes, and book management APIs for the frontend.

## Overview

The backend handles user registration, login, profile access, and CRUD operations for books. It uses MongoDB with Mongoose for persistence and JWT for authentication.

## Features

- User registration and login
- JWT-based authentication
- Protected profile and book routes
- Create, read, update, and delete books
- Book filtering by status and tags
- Cookie-based session support
- Input validation with Zod

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT
- bcryptjs
- Zod
- CORS and Cookie Parser

## Project Structure

```text
src/
├── app.ts                # Express app setup
├── server.ts             # Server entry point
├── config/               # Database configuration
├── common/               # Shared middleware and utilities
├── models/               # Mongoose models
└── modules/              # Auth and Book modules
```

## Installation

1. Navigate to the backend folder
2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file with:

```env
PORT=3030
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your-secret-key
```

4. Start the development server:

```bash
npm run dev
```

The API will be available at http://localhost:3030.

## API Endpoints

### Authentication
- POST `/api/auth/register`
- POST `/api/auth/login`
- POST `/api/auth/logout`
- GET `/api/auth/profile`

### Books
- POST `/api/books/create`
- GET `/api/books/get-books`
- PATCH `/api/books/update/:id`
- DELETE `/api/books/delete/:id`

## Notes

The backend uses protected routes for authenticated actions, and book data is scoped to the logged-in user.
