var router = require("express").Router();
var fetchController = require("../../controllers/fetch");

router.get("/scrape", fetchController.scrape);

module.exports = router;