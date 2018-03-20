(() => {
  const bodyParser = require("body-parser");
  const express = require("express");
  const app = express();
  const exphbs = require("express-handlebars");
  const session = require("express-session");
  const db = require("./models");
  const passport = require("./config/passport");
  
  const PORT = process.env.PORT || 3000;

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  app.use(express.static(__dirname + "/public"));

  // We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


  require("./routes/html.js")(app);
  require("./routes/api-box.js")(app);
  require("./routes/api-user.js")(app);
  require("./routes/api-order.js")(app);
  require("./routes/api-favorites.js")(app);

  db.sequelize.sync({ force: false }).then(() => {
      app.listen(PORT, () => console.log("App listening on PORT " + PORT));
  });
})();