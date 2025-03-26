import pino from 'pino';
const transport = pino.transport({
  target: 'pino-pretty',
  options: {
    colorize: true,
    singleLine: true,
  },
});

export const logger = pino(
  {
    level: 'info',
    redact: [
      'req.headers.authorization',
      'req.body.password',
      'req.body.confirmPassword',
      'req.body.phoneNumber',
      'res.headers["set-cookie"]',
      '*.creditCard',
      '*.ssn',
    ],
    timestamp: pino.stdTimeFunctions.isoTime,
  },
  transport
);
