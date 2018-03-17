module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    id: {
      type: dataType.INTEGER
    },
    name: {
      type: dataType.STRING
    }

    // references: {
    //     type: Sequelize INTEGER,

    // }
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
