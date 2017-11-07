'use strict';
module.exports = (sequelize, DataTypes) => {
  var Player = sequelize.define('Player', {
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    Username: DataTypes.STRING,
    Profile: DataTypes.STRING,
    Photo: DataTypes.STRING,
    Friends: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Player;
};
