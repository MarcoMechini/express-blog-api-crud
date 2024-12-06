const postList = require("../data/posts")

const checkParam = (req, res, next) => {
    const postId = parseInt(req.params.id);
    const indexUpdate = postList.find((elem) => elem.id === postId);

    if (indexUpdate) {
        next();
    } else {
        res.statusCode = 404
        res.json({
            error: true,
            message: "Not Found"
        })
    }
}

module.exports = checkParam