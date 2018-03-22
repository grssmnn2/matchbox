// COMBO ROUTE INTENDED FOR FAVORITES
module.exports = function(sequelize, DataTypes) {

    const UserBox = sequelize.define("UserBox", {
        UserId: DataTypes.INTEGER,
        BoxId: DataTypes.INTEGER
    })

  return UserBox
}