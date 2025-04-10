import { z } from 'zod';

import { IDSchema, DateMixin } from './mixin.js';
export const roleSchema = z.object({
  ...IDSchema.shape,
  ...DateMixin.shape,
  role: z.string(),
  permissions: z.array(z.string()).optional().default([]),
  description: z.string().optional(),
});
