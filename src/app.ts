// Import external modules
import express from "express"
import morgan from "morgan"
import { config } from "dotenv"
import { connect, connection } from "mongoose"
import { json } from "body-parser"
import expressValidator from "express-validator"


// Load env variables
config()

// Create the app
const app = express();

// Connect to the MongoDB database
connect(process.env.MONGO_URI as string, { 
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    })
    .then(() => console.log("DB Connected"))

connection.on("error", err => {
    console.log(`DB Connection Error: ${err.message}`)
})

// Import the routes
import postRoutes from "./routes/post"

// Create custom middleware
const logMiddleware = (req: any, res: any, next: () => void) => {
    // Implement middleware actions
    console.log("Middleware ready!")

    // Call next middleware
    next()
};

// Middleware
app.use(morgan("dev"))
app.use(logMiddleware)
app.use(json())
app.use(expressValidator())

// Define the endpoints
app.use("/", postRoutes)

const port = process.env.PORT || 8080
app.listen(port, () => { console.log(`Node JS API Listening on Port: ${port}`) })