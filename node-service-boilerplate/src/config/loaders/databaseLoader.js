require('dotenv').config();

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_DATABASE_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres', // Change the dialect to 'postgres' for PostgreSQL
    logging: false,
  }
);

export default sequelize;
