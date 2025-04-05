import { z } from 'zod';

import { IDSchema, DateMixin } from './mixin.js'

export const userSchema = z.object({
  ...IDSchema.shape,
  ...DateMixin.shape,
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  mobile: z.string().regex(/^\+[1-9]\d{1,14}$/, {
    message: 'Phone number must be in international format (e.g., +8801234567)',
  }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(/[a-z]/, {
      message: 'Password must contain at least one lowercase letter',
    })
    .regex(/[0-9]/, { message: 'Password must contain at least one number' })
    .regex(/[^A-Za-z0-9]/, {
      message: 'Password must contain at least one special character',
    }),
  role: z.string().regex(/^[0-9a-fA-F]{24}$/),
});
