'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.renameColumn( "Players", "Photo", "Gender")
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn("Players", "Gender", "Photo")
  }
};
