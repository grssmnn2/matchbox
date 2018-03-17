// var user = require("./user")
// var box = require("./box")
// console.log(user);
// console.log(box);



module.exports = function(sequelize, DataTypes) {
    console.log('we hit user box!!!');

    // var user = sequelize.define('User', {});
    // var box = sequelize.define('Box', {});

//   var UserBox = sequelize.define("UserBox", {

    const UserBox = sequelize.define("UserBox", {
        UserId: DataTypes.INTEGER,
        BoxId: DataTypes.INTEGER
    })

//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       references: {
//         model: "user",
//         key: "id"
//       }
//     },

//    id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       references: {
//         model: "box",
//         key: "id"
//       }
//     }
//   })


    // user.belongsToMany(
    //     box,
    //   { through: UserBox },
    //   {
    //     foriegnKey: {
    //       allowNull: false
    //     }
    //   }
    // )
  
    //     box.belongsToMany(user, {through: UserBox}, {
    //         // foriegnKey: {
    //         //     allowNull: false
    //         // }
    //     });
  


  return UserBox
}
