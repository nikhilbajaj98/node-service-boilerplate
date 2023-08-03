require('dotenv').config();

import express from 'express';
import appLoader from './config/loaders';
import logger from './config/logger';
export const app = express();

export const start = async () => {
  try {
    await appLoader({ app, express });
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      logger.info(
        `${process.env.SERVICE_NAME} Server is running on port ${port}`
      );
    });
  } catch (e) {
    logger.error(`Error starting the ${process.env.SERVICE_NAME} server:`, e);
  }
};
