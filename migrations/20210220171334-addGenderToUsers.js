'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', 
      'gender', 
      Sequelize.STRING
      )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', )
  }
};
