'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Organizations extends Model {
    static associate(models) {
      Organizations.hasMany(models.SampleUsers, {
        foreignKey: 'organization_id',
      });
    }
  }

  Organizations.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Organizations',
      tableName: 'organizations',
    }
  );

  return Organizations;
};
