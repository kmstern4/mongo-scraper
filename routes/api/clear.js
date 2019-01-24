var router = require("express").Router();
var clearController = require("../../controllers/clear");

router.delete("/", clearController.delete);

module.exports = router;