// SUBSCRIPTION BOX API ROUTES
module.exports = function(sequelize, DataTypes) {
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
    Box.belongsToMany(models.User, {
      through: models.UserBox,
      onDelete: "CASCADE"
    })
  }

  return Box
}
