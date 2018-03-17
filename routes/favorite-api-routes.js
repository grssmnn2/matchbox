// require access to Favorite table in models folder
var db = require("../models");

module.exports = function (app) {
    //retrieve stored favorites
    app.get("/api/favorites/", function (req, res) {
        db.Favorite.findAll({})
            .then(function (dbFavorite) {
                res.json(dbFavorite);
            });
    });

     // Get route for retrieving a single favorite
  app.get("/api/favorites/:id", function (req, res) {
    db.Favorite.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbFavorite) {
        res.json(dbFavorite);
      });
  });

    // POST route for saving a new favorite
    app.post("/api/favorites", function (req, res) {
        console.log(req.body);
        db.Favorite.create({
            name: req.body.name,
            id: req.body.id
        })
            .then(function (dbFavorite) {
                res.json(dbFavorite);
            });
    });

    // PUT route for updating favorites
    app.put("/api/favorites", function (req, res) {
        db.Favorite.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbFavorite) {
                res.json(dbFavorite);
            });
    });
};
