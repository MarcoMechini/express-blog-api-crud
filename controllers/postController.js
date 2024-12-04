const postList = require("../data/posts");

const index = (req, res) => {
    res.json(postList)
};

const show = (req, res) => {
    const postId = req.params.id;
    const foundPost = postList.find(post => post.id === postId)
    res.json(foundPost);
};

const create = (req, res) => {
    res.json(`Modifica dei dati del post numero`)
};

const update = (req, res) => {
    res.json(`Modifica dell'curPosto del post numero ${postId}`)
};

const modify = (req, res) => {
    const postId = req.params.id;
    res.json(`Modifica dell'curPosto del post numero ${postId}`);
};

const destroy = (req, res) => {
    const postId = req.params.id;
    res.json(`Cancellazione del post numero ${postId}`);
};

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}