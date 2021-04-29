// Import external modules
const express = require("express");
const morgan = require("morgan");

// Create the app
const app = express();

// Import the routes
const postRoutes = require("./routes/post");

// Create custom middleware
const logMiddleware = (req, res, next) => {
    // Implement middleware actions
    console.log("Middleware ready!")

    // Call next middleware
    next()
};

// Middleware
app.use(morgan("dev"));
app.use(logMiddleware);

// Define the endpoints
app.use("/", postRoutes);

const port = 8080;
app.listen(port, () => {console.log(`Node JS API Listening on Port: ${port}`)});