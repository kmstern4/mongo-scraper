var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

module.exports = {
    scrape: function(req, res) {
        axios.get("https://www.washingtonpost.com/lifestyle/travel/").then(function(response) {
            var $ = cheerio.load(response.data);
            $("div.story-list-story").each(function(i, element) {
                var result = {};
                result.saved = false;
                result.title = $(element).find("h3").text();
                result.summary = $(element).find("p").text();
                result.link = $(element).find("h3").find("a").attr("href");
                db.Article.create(result)
                    .then(function(dbArticle) {
                        console.log(dbArticle);
                    })
                    .catch(function(err) {
                        console.log(err);
                    });
            });
            res.send("Scrape Complete");
        });    
    }
}