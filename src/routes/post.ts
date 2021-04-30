// Import external modules
import { Router } from "express"
import { createPostValidator } from "../validators"


const router = Router()

// Import internal modules
import { getPosts, createPost } from "../controllers/post"

// Define the endpoints
router.get("/", getPosts)
router.post("/post", createPostValidator, createPost)

// Export the routes
export default router