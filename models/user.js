//  this is the model which would correspond to our users table in db
//  dependencies
// var box = require("./box")
// var userBox = require("./user_boxes")
var bcrypt = require("bcrypt-nodejs")
//  creating user model and exporting
module.exports = function(sequelize, DataTypes) {
  console.log('we hit user!!!!!!!!!!!');
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

    UserId: {
      type: DataTypes.INTEGER,
      // autoIncrement: true,
      // primaryKey: true
    },

    // BoxId: {
    //   type: DataTypes.INTEGER,
    //   foreignKey: true
    // },

    bucket_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },

    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  // User.associate = function(models) {
  //   User.hasMany(models.Box, {
  //     onDelete: "cascade"
  //   })
  // }

  // User.assocciate = function(models) {
  //   User.hasMany(models.Order, {
  //     onDelete: "cascase"
  //   })
  // }

  // User.assocciate.associate = function(models) {
  //   User.hasMany(models.Favorite, {
  //     onDelete: "cascade"
  //   })
  // }

  User.associate = function(models) {
    console.log('THESE ARE OUR MODELS in user-------', models);
    User.belongsToMany(
      models.Box,
      { through: models.UserBox,
      onDelete: "CASCADE"
      }
      // {
      //   foriegnKey: {
      //     allowNull: false
      //   }
      // }
    )
  }
  // //  ok so for each user -compare unhashed to hashed password
  // User.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password)
  // }

  // //  Hook method here  so that way it auto hashes their password
  // User.hook("beforeCreate", function(user) {
  //   user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
  // })
  console.log('THIS IS THE USER !!!! right before the return ------', User);
  return User
}
