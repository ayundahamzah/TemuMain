'use strict';
module.exports = (sequelize, DataTypes) => {
  var FriendList = sequelize.define('FriendList', {
    playerId: DataTypes.INTEGER,
    friendId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  
  FriendList.associate = function(models){
  FriendList.belongsTo(models.Player)
  }
  
  
  return FriendList;
};