'use strict';
module.exports = (sequelize, DataTypes) => {
  var GamePlayer = sequelize.define('GamePlayer', {
    GameId: DataTypes.INTEGER,
    PlayerId: DataTypes.INTEGER,
    Status: DataTypes.STRING
  });
  GamePlayer.associate = function(models) {
        GamePlayer.belongsTo(models.Game)
        GamePlayer.belongsTo(models.Player)
    }
  return GamePlayer;
};