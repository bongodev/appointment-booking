import { z } from 'zod';

export const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  email: z.string().email({ message: 'Invalid email address' }),
  mobile: z.string().regex(/^\+[1-9]\d{1,14}$/, {
    message: 'Phone number must be in international format (e.g., +8801234567)',
  }),
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
});

export type ProfileFormType = z.infer<typeof profileFormSchema>;
