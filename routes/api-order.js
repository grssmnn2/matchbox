// require access to Order table in models folder
var db = require("../models");

module.exports = function (app) {
    //retrieve stored orders
    app.get("/api/orders/", function (req, res) {
        db.Order.findAll({})
            .then(function (dbOrder) {
                res.json(dbOrder);
            });
    });

    // POST route for saving a new order
    app.post("/api/orders", function (req, res) {
        console.log(req.body);
        db.Order.create({
            name: req.body.name,
            id: req.body.id
        })
            .then(function (dbOrder) {
                res.json(dbOrder);
            });
    });

    // PUT route for updating orders
    app.put("/api/orders", function (req, res) {
        db.Order.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function (dbOrder) {
                res.json(dbOrder);
            });
    });
};
