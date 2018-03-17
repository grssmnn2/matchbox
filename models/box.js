//  dependencies ? 

// var user = require("./user");
// var userBox = require("./user_boxes");

// console.log(user);
module.exports = function(sequelize, DataTypes) {
    console.log('we hit regular box!!!');
    var Box = sequelize.define("Box", {
        BoxId: {
            type: DataTypes.INTEGER,
            // autoIncrement: true,
            // primaryKey: true

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }, 

        bucket_id: {
            type: DataTypes.INTEGER,
            allowBull: false
        }


    })

    Box.associate = function(models) {
        console.log('THESE ARE OUR models.User in box -------', models.User);
        Box.belongsToMany(models.User, {
            through: models.UserBox,
            onDelete: "CASCADE"
        });
    };

    console.log('THESE ARE OUR Box  right before return --- -------', Box);

    return Box;
}