// in models folder there should eventually be a table set up for "User"
var db = require("../models");

module.exports = function (app) {
    //retrieve stored users
    app.get("/api/users/", function (req, res) {
        db.User.findAll({})
            .then(function (dbUser) {
                res.json(dbUser);
            });
    });

    // POST route for saving a new user
    app.post("/api/users", function (req, res) {
        console.log(req.body);
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        })
            .then(function (dbUser) {
                res.json(dbUser);
            });
    });

    // PUT route for updating users
    app.put("/api/users", function (req, res) {
        db.User.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbUser) {
                res.json(dbUser);
            });
    });
};

// upon submission of survey, match user with best box match based on similar scoring