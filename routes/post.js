// Import external modules
const express = require("express");
const router = express.Router();

// Import internal modules
const { getPosts } = require("../controllers/post");

// Define the endpoints
router.get("/", getPosts);

// Export the routes
module.exports = router;