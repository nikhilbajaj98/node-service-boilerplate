'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class SampleUsers extends Model {
    static associate(models) {
      SampleUsers.belongsTo(models.Organizations, {
        foreignKey: 'organization_id',
      });
    }

    static findByEmail(email) {
      return SampleUsers.findOne({
        where: {
          email: email,
        },
      });
    }
  }

  SampleUsers.init(
    {
      // Define model attributes here
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'SampleUsers',
      tableName: 'sample_users',
      timestamps: false,
    }
  );

  return SampleUsers;
};
