import cors from 'cors';
import xss from 'xss-clean';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import ErrorResponse from '../../utils/errorResponse';
import errorHandler from '../../utils/errorHandler';
import sampleUserRoutes from '../../app/routes/sample.user.routes';
import { healthCheckSuccessHTML } from '../../utils/helper';

export default ({ app, express }) => {
  // Enable Cross-Origin Resource Sharing (CORS)
  app.use(cors());

  // Parse incoming request bodies
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // Set security HTTP headers
  app.use(helmet());

  // Prevent XSS attacks
  app.use(xss());

  // Logging HTTP requests to console during development
  if (process.env.NODE_ENV === 'development') {
    const morgan = require('morgan');
    app.use(morgan('dev'));
  }

  // Rate limiting to prevent abuse
  const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 minutes
    max: 100, // Limit each IP to 100 requests per windowMs,
    handler: (req, res) => {
      res.status(429).json({
        error: true,
        message:
          'Too many requests. You have exceeded the rate limit. Please try again later.',
        code: 429,
      });
    },
  });
  app.use(limiter);

  // Mounting the routes
  app.use('/sample-users', sampleUserRoutes);

  // Custom error response handling
  app.use((req, res, next) => {
    res.error = (message, statusCode) => {
      const error = new ErrorResponse(message, statusCode);
      next(error);
    };
    next();
  });

  // Error handler middleware
  app.use(errorHandler);

  // Health routes
  app.get('/', (req, res) => {
    // res.status(200).send('Health OK');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(healthCheckSuccessHTML);
  });
  app.get('/health', (req, res) => {
    // res.status(200).send('Health OK');
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(healthCheckSuccessHTML);
  });

  return app;
};
