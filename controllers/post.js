// Import internal modules
const Post = require("../models/post")

exports.getPosts = (req, res) => {
    const posts = Post.find()
        .select("_id title body")
        .then((posts) => {
            res.json({ posts: posts })
        })
        .catch(err => console.log(err))
}

exports.createPost = (req, res) => {
    // Create the post
    const post = new Post(req.body)

    // Log action
    console.log(`Creating Post: ${post}`)

    // Save the post
    post.save().then(result => {
        res.status(200).json({
            post: result
        })
    })
}