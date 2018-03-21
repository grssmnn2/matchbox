// require access to User table in models folder
var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {
    //retrieve stored users
    app.get("/api/users/", function (req, res) {
        db.User.findAll({})
            .then(function (dbUser) {
                res.json(dbUser);
            });
    });

    //  this will send the user to their page - commenting this out since it threw an error, might be duped. 
    //  what goes here: we'll have to do a promise all - 

    app.post("/api/login", passport.authenticate("local"), function(req, res){
        // console.log(res.body.id);
        // res.json("/members");
    })

    // POST route for saving a new user
    app.post("/api/users", (req, res) => {
        db.User.create(req.body).then(dbUser => res.json(dbUser));
    });

    //  route for logging user out 
    // PUT route for updating users
    app.put("/api/users/:id", (req, res) => {
        db.User.update(req.body, { where: { id: req.params.id }
        }).then(dbUser => res.json(dbUser));
    });
};

