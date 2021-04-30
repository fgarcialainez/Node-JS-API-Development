// Import internal modules
import Post from "../models/post"

export function getPosts(req: any, res: any) {
    const posts = Post.find()
        .select("_id title body")
        .then((posts) => {
            res.json({ posts: posts })
        })
        .catch(err => console.log(err))
}

export function createPost(req: any, res: any) {
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