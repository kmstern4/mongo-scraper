var router = require("express").Router();
var articleController = require("../../controllers/article");

router.get("/all", articleController.findAll);
router.get("/:id", articleController.findOne);
router.put("/:id", articleController.update);
router.delete("/:id", articleController.deleteOne);

module.exports = router;
