import Sequelize from 'sequelize';
import SampleUsers from './sample.user.model';
import Organizations from './sample.organization.model';
import sequelize from '../../config/loaders/databaseLoader';

const models = {
  SampleUsers: SampleUsers(sequelize, Sequelize.DataTypes), // Initialize SampleUsers model
  Organizations: Organizations(sequelize, Sequelize.DataTypes), // Initialize Organizations model
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

export default models;
