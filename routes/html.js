(() => {

  const path = require("path");
  const db = require("../models");

  const isAuthenticated = require("../config/middleware/isAuthenticated");
  

  module.exports = app => {

    // homepage - options to login or signup
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    // get request to signup page 
    app.get("/signup", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/signup.html"))
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

    // user dashboard (handlebars)
    app.get("/user_dashboard/:id/:bucket?", (req, res) => {
      Promise.all([
        db.Box.findAll({}),
        db.Box.findAll({ where: { bucket_id: req.params.bucket } }), 
        db.User.findOne({ where: { id: req.params.id }}), 
      ]).then(([ allBoxes, boxResults, userProfile]) => {
        let currentBox = allBoxes[userProfile.current_box - 1];
        if (boxResults.name === undefined || null) {
          res.render("index", { allBoxes, currentBox, boxResults, userProfile });
        } else {
          res.render("index", { currentBox, boxResults, userProfile });
        }
      })
    });

    // update user profile (handlebars)
    app.get("/update/:id", (req, res) => {
      db.User.findOne({ 
        where: { 
          id: req.params.id 
      }}).then(data => res.render("update", { User: data })
    )});

    //  this is for testing only - 
    //  user who is not logged in will get redirected to our home page 
    //  If a user who is not logged in tries to access this route they will be redirected to the signup page
    //  this pertains to HBS
    //  this already exists above 
    app.get("/members", isAuthenticated, function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
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