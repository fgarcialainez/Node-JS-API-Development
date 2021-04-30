exports.createPostValidator = (req, res, next) => {
    // Title
    req.check("title", "Write a title").notEmpty()
    req.check("title", "Title must be between 4 and 128 characters").isLength({
        min: 4,
        max: 128
    })

    // Body
    req.check("body", "Write a body").notEmpty()
    req.check("body", "Body must be between 4 and 2000 characters").isLength({
        min: 4,
        max: 2000
    })
        

    // Check for errors
    const errors = req.validationErrors()

    // If there is some error, then show the first
    if(errors) {
        const firstError = errors.map(error => error.msg)[0]
        return res.status(400).json({ error: firstError })
    }

    // Proceed to the next middleware
    next()
}