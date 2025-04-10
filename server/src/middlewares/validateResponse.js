import { z } from 'zod';

const validateResponse = (schema) => (req, res, next) => {
  try {
    const validatedData = schema.parse(res.locals.data);
    res.json(validatedData);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    next(error);
  }
};

export default validateResponse;
