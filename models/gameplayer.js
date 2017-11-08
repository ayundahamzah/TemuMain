'use strict';
module.exports = (sequelize, DataTypes) => {
  var GamePlayer = sequelize.define('GamePlayer', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    GameId: DataTypes.INTEGER,
    PlayerId: DataTypes.INTEGER,
  });
  GamePlayer.associate = function(models) {
        GamePlayer.belongsTo(models.Game)
        GamePlayer.belongsTo(models.Player)
    }
  return GamePlayer;
};
