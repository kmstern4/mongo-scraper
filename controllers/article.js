var db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Article
            .find()
            .then(function(articles) {
                res.json(articles);
            });
    },
    findOne: function(req, res) {
        db.Article
            .findById(req.params.id)
            .populate("note")
            .then(function(article) {
                res.json(article);
            });
    },
    update: function(req, res) {
        db.Article
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(function(article) {
                res.json(article);
            });
    },
    deleteOne: function(req, res) {
        db.Article
            .deleteOne({ _id: req.params.id })
            .then(function(article) {
                return db.Note.deleteOne({ _id: article.note })
            })
            .then(function() {
                res.send("Article and note deleted");
            });
    },
    clear: function(req, res) {
        db.Article
            .deleteMany({})
            .then(function(articles) {
                return db.Note.deleteMany({});
            })
            .then(function() {
                res.send("All articles and notes deleted");
            });
    },
};