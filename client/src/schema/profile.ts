import { z } from 'zod';

export const userProfileSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  email: z
    .string()
    .min(1, 'Email is required')
    .email({ message: 'Invalid email address' }),
  mobile: z
    .string()
    .min(1, 'Mobile is required')
    .regex(/^\+[1-9]\d{1,14}$/, {
      message:
        'Phone number must be in international format (e.g., +8801234567)',
    }),
  image: z.string().optional(),
  address: z
    .object({
      country: z.string().optional(),
      city: z.string().optional(),
    })
    .optional(),
});
export type UserProfileType = z.infer<typeof userProfileSchema>;
