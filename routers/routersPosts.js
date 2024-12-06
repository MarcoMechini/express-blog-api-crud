const express = require("express");
const router = express.Router();
const controller = require("../controllers/postController");
const checkParam = require("../middleware/checkParam");

//index
router.get('/', controller.index);

//show
router.get('/:id', checkParam, controller.show);

//create
router.post("/", controller.create);

//update
router.put("/:id", checkParam, controller.update);

//modify
router.patch("/:id", checkParam, controller.modify);

//destroy
router.delete("/:id", checkParam, controller.destroy);

module.exports = router