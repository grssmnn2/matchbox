module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("Favorite", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false

        }
    }) 
    Favorite.associate = function(models) {
        Favorite.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Favorite;
}