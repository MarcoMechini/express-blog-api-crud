const postList = require("../data/posts");

const index = (req, res) => {
    res.json(postList)
};

const show = (req, res) => {
    const postId = parseInt(req.params.id);

    const foundPost = postList.find(post => post.id === postId)
    foundPost === undefined ? res.sendStatus(404) : res.json(foundPost);

};

const create = (req, res) => {
    const objParams = req.body
    // console.log(objParams);

    const nexId = postList[postList.length - 1].id + 1
    console.log(nexId);

    const newPost = {
        id: nexId,
        ...objParams
    }
    postList.push(newPost);
    res.statusCode = 201;
    res.json("New post created")
};

const update = (req, res) => {
    const postId = req.params.id;
    res.json(`Modifica dell'elemento del post numero ${postId}`)
};

const modify = (req, res) => {
    const postId = req.params.id;
    res.json(`Modifica di alcuni parametri del post numero ${postId}`);
};

const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
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