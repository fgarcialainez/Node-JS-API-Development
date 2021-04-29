// Import external modules
const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv")
const mongoose = require("mongoose")

// Load env variables
dotenv.config()

// Create the app
const app = express();

// Connect to the MongoDB database
mongoose.connect(process.env.MONGO_URI, 
    { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("DB Connected"));

mongoose.connection.on("error", err => {
    console.log(`DB Connection Error: ${err.message}`);
});

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

const port = process.env.PORT || 8080;
app.listen(port, () => { console.log(`Node JS API Listening on Port: ${port}`) });