// Import external modules
import { Schema, model } from "mongoose"

const postSchema = new Schema({
    title: {
        type: String,
        required: "Title is required",
        minlength: 4,
        maxlength: 128
    },
    body: {
        type: String,
        required: "Body is required",
        minlength: 4,
        maxlength: 2000
    }
})

export default model("Post", postSchema)