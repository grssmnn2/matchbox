//  this is the model which would correspond to our users table in db
//  dependencies
var bcrypt = require("bcrypt-nodejs")
//  creating user model and exporting
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    //  validation on user info
    //  let's get email for now and we can add more later
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    box_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Box, 
            key: 'id',

            //  the tricky part -mysql when to check for foreqign key constraint 
            //  since this line is only valid for postGres SQL 
            deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
            
        },

        order_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Order,
                key: 'id',
                deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                
            },

            favorites_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: Favorite,
                    key: 'id',
                    deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
                }
            }
            
        }
    }
  })
  //  ok so for each user -compare unhashed to hashed password
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
  }

  //  Hook method here  so that way it auto hashes their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
  })
  return User
}
