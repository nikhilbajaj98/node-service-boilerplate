'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('organizations', [
      {
        name: 'Organization 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Organization 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more organizations as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('organizations', null, {});
  },
};
