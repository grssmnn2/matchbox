module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {

    name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }

  })

  Order.associate = function(models) {
    Order.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Order
}
