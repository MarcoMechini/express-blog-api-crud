const express = require("express");
const app = express();
const port = 3000;
const post = require("./data/posts");
const postsRouter = require("./routers/routersPosts");

app.use(express.static('public'));
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
    res.json("hello")
})

//nella route bacheca abbiamo come risposta un json che ha come parametri post e la lunghezza
app.get('/bacheca', (req, res) => {
    res.json({
        posts: post,
        length: post.length,
    })
});

app.listen(port, () => {
    console.log("server on");
})