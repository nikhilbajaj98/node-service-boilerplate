import sequelize from 'sequelize';
const { UniqueConstraintError, ValidationError } = sequelize;
import ErrorResponse from './errorResponse';
import logger from '../config/logger';

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);
  console.log(err);

  let error = { ...err };
  error.message = err.message;

  if (err instanceof UniqueConstraintError) {
    const message = 'Field already exists or duplicate value encountered';
    error = new ErrorResponse(message, 422);
  }

  if (err instanceof ValidationError) {
    const message = err.errors.map((error) => error.message);
    error = new ErrorResponse(message, 422);
  }

  res.status(error.status || 500).json({
    error: true,
    code: error.status || 500,
    message: error.message || 'Server error. Request not completed',
    data: null,
  });

  next();
};

export default errorHandler;
