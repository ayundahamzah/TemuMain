'use strict';
module.exports = (sequelize, DataTypes) => {
  var GamePlayers = sequelize.define('GamePlayers', {
    GameId: DataTypes.INTEGER,
    PlayerId: DataTypes.INTEGER,
    Status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return GamePlayers;
};