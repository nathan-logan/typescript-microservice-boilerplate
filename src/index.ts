import Express from 'express';
import config from './config';
import logger from './logger';

const main = () => {
  const app = Express();

  app.listen(config.port, () => {
    logger.info(`Server listening on port ${config.port}`);
  });
};

main();
