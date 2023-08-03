import databaseLoader from './databaseLoader';
import expressLoader from './expressLoader';
import logger from '../logger';

export default async ({ app, express }) => {
  try {
    await databaseLoader.authenticate();
    logger.info(`Node env: ${process.env.NODE_ENV}`);
    logger.info(`Database connection established.`);

    expressLoader({ app, express });
    logger.info('Express middleware configured.');
  } catch (error) {
    throw error;
  }
};
