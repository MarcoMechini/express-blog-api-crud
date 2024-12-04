const postList = require("../data/posts");

const index = (req, res) => {
    res.json(postList)
};

const show = (req, res) => {
    const postId = req.params.id;

    const foundPost = postList.find(post => post.id === postId)
    foundPost === undefined ? res.sendStatus(404) : res.json(foundPost);

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
    postId === null ? res.sendStatus(404) : postList.splice((postId - 1), 1);
    console.log(postList);
    res.sendStatus(204)
};

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}