
// in models folder there should eventually be table set up called "Box"
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the boxes
  app.get("/api/boxes/", function(req, res) {
    db.Box.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    });
  });

  // Get route for returning boxes of a specific category
  app.get("/api/boxes/category/:category", function(req, res) {
    db.Box.findAll({
      where: {
        category: req.params.category
      }
    })
    .then(function(dbBox) {
      res.json(dbBox);
    });
  });

  // Get route for retrieving a single box
  app.get("/api/boxes/:id", function(req, res) {
    db.Box.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbBox) {
      res.json(dbBox);
    });
  });
    // PUT route for updating boxes
    app.put("/api/boxes", function(req, res) {
        db.Box.update(req.body,
          {
            where: {
              id: req.body.id
            }
          })
        .then(function(dbBox) {
          res.json(dbBox);
        });
      });
};
