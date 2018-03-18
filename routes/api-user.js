// require access to User table in models folder
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
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            age: req.body.age,
            city: req.body.city,
            password: req.body.password,
            bucket_id: req.body.bucket_id

        })
            .then(function (dbUser) {
                res.json(dbUser);
            });
    });

    // PUT route for updating users
    app.put("/api/users/:id", (req, res) => {
        db.User.update(req.body, { where: { id: req.params.id }
        }).then(dbUser => res.json(dbUser));
    });
};

