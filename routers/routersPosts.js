const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController")

//index
router.get('/', controller.index);

//show
router.get('/:id', controller.show);

//create
router.post("/", controller.create);

//update
router.put("/:id", controller.update);

//modify
router.patch("/:id", controller.modify);

//destroy
router.delete("/:id", controller.destroy);

module.exports = router