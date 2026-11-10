# CRUD API with Express, Node.js, Mongoose, and TypeScript

This project is a RESTful API that allows users to perform CRUD (Create, Read, Update, Delete) operations on a MongoDB database hosted on MongoDB Atlas.

The API is built using **Node.js**, **Express.js**, **Mongoose**, and **TypeScript**. It also uses **dotenv** for managing environment variables.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Insomnia](https://insomnia.rest/) for API testing

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/your-repo-crud.git
cd your-repo-crud

2. Install dependencies

npm install

3. Create a .env file

Create a .env file in the root directory of the project with the following variables. Adjust the values according to your configuration:

PORT=3000
MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING

⚠️ Important: Never share your MongoDB connection string or credentials in public repositories.


4. Run the project
For development:

npm run dev

To build the project:

npm run build

To run the compiled application:

npm start

API Endpoints

The following endpoints are available for performing CRUD operations on movies. The endpoints were tested using Insomnia.

| Method   | Endpoint      | Description              |
| -------- | ------------- | ------------------------ |
| `GET`    | `/movies`     | Get all movies           |
| `GET`    | `/movies/:id` | Get a movie by ID        |
| `POST`   | `/movies`     | Create a new movie       |
| `PUT`    | `/movies/:id` | Update an existing movie |
| `DELETE` | `/movies/:id` | Delete a movie           |



Example Response
GET /movies

[
  {
    "_id": "66332cfb48b36b3c7c50cfcc",
    "title": "Inception",
    "director": "Christopher Nolan",
    "year": 2010,
    "genre": "Sci-Fi"
  }
]

Project Structure

├── src/
│   ├── controllers/       # Business logic
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Route definitions
│   ├── app.ts             # Application configuration
│   └── index.ts           # Application entry point
├── .env                   # Environment variables
├── package.json
├── tsconfig.json
└── README.md


TypeScript Configuration
Example tsconfig.json configuration:

{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}

NPM Scripts
The project includes the following scripts in package.json:

{
  "scripts": {
    "dev": "ts-node-dev --respawn src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}

Database

The API connects to a remote MongoDB database hosted on MongoDB Atlas.

Movie data is stored in the movies_cursoDB database.

Testing

Insomnia was used to test the REST API and verify the responses returned by each CRUD operation.

The API was tested for the following operations:

Retrieving all movies
Retrieving a movie by ID
Creating a new movie
Updating an existing movie
Deleting a movie
