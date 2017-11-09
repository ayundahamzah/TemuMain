'use strict';
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var Player = sequelize.define('Player', {
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Username: DataTypes.STRING,
    Profile: DataTypes.STRING,
    Gender: DataTypes.STRING,
    Friends: DataTypes.STRING,

  });
  //CLASS METHOD
  Player.associate = function(models) {
      Player.belongsToMany(models.Game,{through:"GamePlayer"})
      Player.hasMany(models.GamePlayer)
  }
  
  Player.beforeCreate(function(dataPlayer, options){
    const saltRounds = 10;
    const myPlaintextPassword = dataPlayer.Password;
    return bcrypt.hash(myPlaintextPassword, saltRounds)
    .then(function(hash){
      dataPlayer.Password = hash
    })
  })
  
  return Player;
};
