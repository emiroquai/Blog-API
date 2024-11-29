# Blog-API

This is a backend application for a blog platform, built with **Node.js**, **Express**, and **Prisma**. It provides RESTful API endpoints for managing users, posts, and comments. The app uses **JWT authentication** to ensure secure access.

## Features

- **User Authentication**: Sign up, log in, and manage user accounts securely using JWT.
- **Post Management**: Create, read, update, and delete blog posts.
- **Comment System**: Users can comment on posts.
- **Secure**: Uses bcrypt for password hashing and JWT for authentication.

## Technologies

- **Node.js**: JavaScript runtime.
- **Express**: Fast and lightweight web framework.
- **Prisma**: Type-safe ORM for database interactions.
- **JWT**: Secure authentication.
- **PostgreSQL**: Relational database (can be swapped for other supported databases).

## API Endpoints

### Authentication

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| POST   | `/auth/register` | Register a new user |
| POST   | `/auth/login`    | Log in a user       |

### Posts

| Method | Endpoint                   | Description                            |
| ------ | -------------------------- | -------------------------------------- |
| GET    | `/posts/all`               | Get all published posts                |
| GET    | `/posts/admin/all`         | Get all posts (admin only)             |
| GET    | `/posts/admin/unpublished` | Get all unpublished posts (admin only) |
| GET    | `/posts/:id`               | Get a specific post by ID              |
| POST   | `/posts`                   | Create a new post                      |
| PUT    | `/posts/:id`               | Update a post                          |
| DELETE | `/posts/:id`               | Delete a post                          |

### Comments

| Method | Endpoint                             | Description               |
| ------ | ------------------------------------ | ------------------------- |
| POST   | `/posts/:postId/comments`            | Add a comment to a post   |
| DELETE | `/posts/:postId/comments/:commentId` | Delete a specific comment |

### Users

| Method | Endpoint        | Description                    |
| ------ | --------------- | ------------------------------ |
| POST   | `/users/admin/` | Create a new user (admin only) |
| GET    | `/users`        | Get all users                  |
| GET    | `/users/:id`    | Get a specific user by ID      |
| PUT    | `/users/:id`    | Update a user                  |
| DELETE | `/users/:id`    | Delete a user                  |
