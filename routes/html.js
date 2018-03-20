(() => {

  const path = require("path");
  const db = require("../models");

  module.exports = app => {

    // homepage - options to login or signup
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

    // signup page
    app.get("/signup", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/signup.html"));
    });

    // billing page
    app.get("/shipping", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/shipping.html"));
    });

    // user dashboard (handlebars)
    app.get("/user_dashboard/:id/:bucket", (req, res) => {
      Promise.all([
        db.Box.findAll({ where: { bucket_id: req.params.bucket } }), 
        db.User.findOne({ where: { id: req.params.id }}), 
        db.UserBox.findOne({ where: { UserId: req.params.id }})
      ]).then(([boxResults, userProfile, linkedBox]) => {
        let currentBox = boxResults[linkedBox.BoxId];
        res.render("index", { boxResults, userProfile, currentBox });
      })
    });

    // TEMPLATE DASHBOARD - TESTING ONLY
    app.get("/dashboard", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/test-userProfiles.html"));
    });

    // signout page
    app.get("/signout", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/signout.html"));
    });

    // error page
    app.get("/error", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/error.html"));
    });

  };

})();