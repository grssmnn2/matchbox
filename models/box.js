//  dependencies ? 
module.exports = function(sequelize, DataTypes) {
    var Box = sequelize.define("Box", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false

        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })

    Box.associate = function(models) {
        Box.belongsTo(models.User, {
            foriegnKey: {
                allowNull: false
            }
        });
    };

    return Box;
}