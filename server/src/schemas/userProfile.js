import { z } from 'zod';
import { DateMixin, IDSchema } from './mixin.js';

export const userProfileSchema = z.object({
  ...IDSchema.shape,
  user: z.string(),
  image: z.string().optional(),
  address: z
    .object({
      street: z.string().optional(),
      city: z.string().optional(),
      zipCode: z.string().optional(),
      country: z.string().optional(),
    })
    .optional(),
  dateOfBirth: z.string().optional(),
  ...DateMixin.shape,
});
