//  dependencies ?

// var user = require("./user");
// var userBox = require("./user_boxes");

// console.log(user);
module.exports = function(sequelize, DataTypes) {
  console.log("we hit regular box!!!")
  var Box = sequelize.define("Box", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    bucket_id: {
      type: DataTypes.INTEGER,
      allowBull: false
    },

    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },

    image_url: {
      type: DataTypes.STRING,
      allowNull: false
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  })

  Box.associate = function(models) {
    console.log("THESE ARE OUR models.User in box -------", models.User)
    Box.belongsToMany(models.User, {
      through: models.UserBox,
      onDelete: "CASCADE"
    })
  }

  console.log("THESE ARE OUR Box  right before return --- -------", Box)

  return Box
}
