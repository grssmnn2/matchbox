// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // root route sends user to main welcome page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //send user to login page (may end up a pop up modal)
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  //send user to survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

   //send user to box results page (may end up being a modal)
   app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/results.html"));
  });

  //send user to checkout/end page
  app.get("/checkout", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/checkout.html"));
  });

};