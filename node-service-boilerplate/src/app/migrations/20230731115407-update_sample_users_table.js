'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('sample_users', 'organization_id', {
      type: Sequelize.INTEGER,
      allowNull: true, // Change to false if you want to enforce foreign key constraint
      references: {
        model: 'organizations',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL', // Change to 'CASCADE' or 'RESTRICT' as needed
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('sample_users', 'organizationId');
  },
};
