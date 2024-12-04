const express = require("express");
const router = express.Router();
const postList = require("../data/posts");

//index
router.get('/', (req, res) => {
    res.json(postList)
})

//show
router.get('/:id', (req, res) => {
    const postId = req.params.id;
    const foundPost = postList.find(post => post.id === postId)
    res.json(foundPost);
})

//create
router.post("/", (req, res) => {
    res.json(`Modifica dei dati del post numero ${postId}`)
})

//update
router.put("/:id", (req, res) => {
    res.json(`Modifica dell'curPosto del post numero ${postId}`)
})

//modify
router.patch("/:id", (req, res) => {
    const postId = req.params.id;
    res.json(`Modifica dell'curPosto del post numero ${postId}`);
})

//destroy
router.delete("/:id", (req, res) => {
    const postId = req.params.id;
    res.json(`Cancellazione del post numero ${postId}`);
})
module.exports = router