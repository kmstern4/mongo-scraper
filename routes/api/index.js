var router = require("express").Router();
var fetchRoutes = require("./fetch");
var clearRoutes = require("./clear");
var articlesRoutes = require("./articles");
var notesRoutes = require("./notes");

router.use("/fetch", fetchRoutes);
router.use("/clear", clearRoutes);
router.use("/articles", articlesRoutes);
router.use("/notes", notesRoutes);

module.exports = router;