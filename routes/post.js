// Import external modules
const express = require("express")
const validator = require("../validators")


const router = express.Router()

// Import internal modules
const { getPosts, createPost } = require("../controllers/post")

// Define the endpoints
router.get("/", getPosts)
router.post("/post", validator.createPostValidator, createPost)

// Export the routes
module.exports = router