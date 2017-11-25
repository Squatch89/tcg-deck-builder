const express = require("express");
const bodyParser = require("body-parser");
const hbars = require('express-handlebars');
const db = require("./models");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//environment variables
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));

app.use(express.static("public"));


//handlebars setup

app.engine("handlebars", hbars({ defaultLayout: "main" }));
//This will render handlebars files when res.render is called.
app.set("view engine", "handlebars");

/*
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

 */


//html route

var routes = require("./controller/routes");
// routes folder no longer exists, use above routes file path
// var routes = require("./routes/routes");


app.use("/", routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});