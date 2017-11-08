'use strict';
module.exports = (sequelize, DataTypes) => {
  var Game = sequelize.define('Game', {
    Game_name: DataTypes.STRING,
    Thumbnail: DataTypes.STRING,
    Description: DataTypes.STRING
  });
  //CLASS METHOD
  Game.associate = function(models) {
      Game.belongsToMany(models.Player,{through:"GamePlayer"})
      Game.hasMany(models.GamePlayer)
  }
  return Game;
};
