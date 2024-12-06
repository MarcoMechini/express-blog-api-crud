const handleError = (err, req, res, next) => {
    res.statusCode = 500;
    res.json({
        error: true,
        message: "internal server error"
    })
}

module.exports = handleError