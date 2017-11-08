'use strict';
module.exports = (sequelize, DataTypes) => {
  var GamePlayer = sequelize.define('GamePlayer', {
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
  return GamePlayer;
};