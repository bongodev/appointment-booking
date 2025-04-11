import { z } from 'zod';

import { IDSchema, DateMixin } from './mixin.js';

export const appointmentSchema = z.object({
  ...IDSchema.shape,
  ...DateMixin.shape,
  host: z.string().min(1, 'Host is required'),
  guests: z.array(z.string()).min(1, 'At least one guest is required'),
  meetingDetails: z.object({
    meetingLink: z.string().url('Invalid meeting link'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .optional(),
  }),
  dateTime: z
    .string()
    .datetime({ message: 'Invalid datetime string! Must be UTC.' }),
  timeZone: z.string().min(1, 'Time zone is required'),
  description: z.string().optional(),
  status: z
    .enum(['pending', 'confirmed', 'canceled', 'rescheduled'])
    .default('pending'),
});
