var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var PORT = 3000;
var app = express();
var routes = require("./routes");
var exphbs = require("express-handlebars");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(routes);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/homeworkdb"

mongoose.connect(MONGODB_URI);

app.listen(PORT, function() {
    console.log("App running on port " + PORT);
});