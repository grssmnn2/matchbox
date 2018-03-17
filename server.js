var express = require("express");
var bodyParser = require("body-parser");
var path = require("path")
var boxApiRoutes = require("./routes/box-api-routes");
var htmlRoutes = require("./routes/html-routes");
var userApiRoutes = require("./routes/user-api-routes");

var app = express();
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "public")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

boxApiRoutes(app);
htmlRoutes(app);
userApiRoutes(app);

// listen on port 3000
var port = process.env.PORT || 3000;
app.listen(port);
