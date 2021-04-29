const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Node JS API Ready!")
});

const port = 8080;
app.listen(port, () => {console.log(`Node JS API Listening on Port: ${port}`)});