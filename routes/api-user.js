// require access to User table in models folder
var db = require("../models");
var passport = require("../config/passport");

module.exports = app => {
    // retrieve all stored users
    app.get("/api/users", (req, res) => {
        db.User.findAll({}).then(dbUser => res.json(dbUser));
    });

    // retrieve stored user from login
    app.post("/api/users/login", passport.authenticate("local"), (req, res) => {
        db.User.findOne({
            where: { email: req.body.email }
        }).then(dbUser => res.json(dbUser));
    });

    // POST route for saving a new user
    app.post("/api/users", (req, res) => {
        db.User.create(req.body).then(dbUser => res.json(dbUser));
    });

    // PUT route for updating users
    app.put("/api/users/:id", (req, res) => {
        db.User.update(req.body, { where: { id: req.params.id }
        }).then(dbUser => res.json(dbUser));
    });

    // logging user out 
    // TO DO
};

