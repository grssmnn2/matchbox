(() => {
  const bodyParser = require("body-parser");
  const express = require("express");
  const app = express();
  const exphbs = require("express-handlebars");
  const db = require("./models");
  const PORT = process.env.PORT || 3000;

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use(express.static(__dirname + "/public"));

  app.engine("handlebars", exphbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  require("./routes/html.js")(app);
  require("./routes/api-box.js")(app);
  require("./routes/api-user.js")(app);
  require("./routes/api-order.js")(app);
  require("./routes/api-favorites.js")(app);

  db.sequelize.sync({ force: false }).then(() => {
      app.listen(PORT, () => console.log("App listening on PORT " + PORT));
  });
})();