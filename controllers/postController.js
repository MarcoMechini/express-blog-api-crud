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
    let nexId = 0;
    if (postList.length) {
        console.log('dentro if');
        nexId = postList[postList.length - 1].id + 1
    } else {
        console.log('dentro else');
        nexId = 1;
    }

    const newPost = {
        id: nexId,
        ...objParams
    }
    postList.push(newPost);
    res.statusCode = 201;
    res.json(newPost)
};

const update = (req, res) => {
    const postId = parseInt(req.params.id);
    const objParams = req.body

    const indexUpdate = postList.findIndex((elem) => elem.id === postId);
    postList[indexUpdate] = {
        id: postId,
        ...objParams
    }
    res.sendStatus(204);

};

const modify = (req, res) => {
    const postId = req.params.id;
    res.json(`Modifica di alcuni parametri del post numero ${postId}`);
};

const destroy = (req, res) => {
    const postId = parseInt(req.params.id);
    const indexDelete = postList.findIndex((elem) => elem.id === postId);

    postList.splice((indexDelete), 1)
    console.log(postList);
    res.sendStatus(204);
};

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}