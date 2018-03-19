(() => {

  const path = require("path");
  const db = require("../models");

  module.exports = app => {

    // homepage - login or signup
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // login page
    app.get("/login", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    // survey page
    app.get("/survey", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

     // survey page
     app.get("/shipping", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/shipping.html"));
    });

    // user dashboard (handlebars)
    // app.get("/:id", (req, res) => {
    //   db.UserBox.findOne({ where: { id: req.params.id }
    //   }).then(data => res.render("index", { user: data }));
    // });

    // TEMPLATE DASHBOARD - TESTING ONLY
    app.get("/dashboard", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/test-userProfiles.html"));
    });

  };

})();