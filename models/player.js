'use strict';
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
  return Player;
};
