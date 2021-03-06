var db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Note
            .find()
            .then(function(notes) {
                res.json(notes);
            });
    },
    findOne: function(req, res) {
        db.Note
            .findById(req.params.id)
            .then(function(note) {
                res.json(note);
            })
    },
    create: function(req, res) {
        db.Note.create({ text: req.body.text })
            .then(function(note) {
                return db.Article.findOneAndUpdate({ _id: req.body.articleId }, { $set: { note: note._id } }, { new: true });
            })
            .then(function(article) {
                res.json(article);
            })
    },
    update: function(req, res) {
        db.Note.update({ _id: req.params.id }, { $set: { text: req.body.text } })
            .then(function(note) {
                res.json(note)
            });
    },
    deleteOne: function(req, res) {
        db.Note.deleteOne({ _id: req.params.id })
            .then(function(note) {
                res.json(note);
            });
    }
}