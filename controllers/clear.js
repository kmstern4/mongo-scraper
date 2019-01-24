var db = require("../models");

module.exports = {
    delete: function(req, res) {
        db.Article.deleteMany({})
            .then(function(data) {
                return db.Note.deleteMany({})
            })
            .then(function(data) {
                res.json(data);
            });
    }
}