'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Players", "Friends")
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.addColumn("Players", "Friends", {type:Sequelize.STRING})
  }
};
