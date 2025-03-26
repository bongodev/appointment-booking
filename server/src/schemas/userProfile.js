import { z } from 'zod';
import { userSchema } from './user.js';
import { DateMixin, IDSchema } from './mixin.js';

export const userProfileSchema = z.object({
  ...IDSchema.shape,
  // user: z.union([z.string(), userSchema.omit({ password: true })]),
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
  dateOfBirth: z.string().date().optional(),
  contact: z.enum(['email', 'phone', 'sms']),
  ...DateMixin.shape,
});
