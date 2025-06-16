# Piso Clone

This project includes a simple Express backend and a React frontend built with Vite. In development, the React dev server proxies API requests to the Express server.

## Prerequisites

- Node.js 18+
- npm
- A running database (MongoDB or PostgreSQL)

## Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```
PORT=5000
DATABASE_URL=<your database connection string>
```

Update the `DATABASE_URL` according to your database provider (MongoDB or PostgreSQL).

## Installing Dependencies

From the project root run:

```
cd server && npm install
cd ../client && npm install
```

## Running the Project

In two separate terminals run:

```
# Terminal 1 - start the backend
npm run server --prefix server

# Terminal 2 - start the frontend
npm run dev --prefix client
```

The React app will be available on `http://localhost:5173` and will proxy API requests beginning with `/api` to `http://localhost:5000`.

## Docker (Optional)

A basic `docker-compose.yml` is provided to start both services and a MongoDB container. Run:

```
docker-compose up --build
```

This will expose the React app on port 5173, the API on port 5000 and MongoDB on port 27017.
