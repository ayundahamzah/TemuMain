'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("GamePlayers", "Status")
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("GamePlayers", "Status")
  }
};
