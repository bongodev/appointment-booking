import cors from 'cors';
import express from 'express';
import pinoHttp from 'pino-http';

import { config, logger } from './config/index.js';
import connectDB from './db.js';
import configureRouter from './routers/index.js';
import { errorHandler } from './middlewares/index.js';

const port = config.PORT;

const app = express();

app.use(pinoHttp({ logger }));
app.use(cors(config.CORS));
app.use(express.json());

connectDB();

configureRouter(app);

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});
