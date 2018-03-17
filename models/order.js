module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    id: {
      type:  DataTypes.INTEGER, autoIncrement: true,
      primaryKey: true
      
    
  },
    name: {
      type: DataTypes.STRING
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
