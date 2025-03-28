import { z } from 'zod';

import { IDSchema, DateMixin } from './mixin.js';
export const roleSchema = z.object({
  ...IDSchema.shape,
  ...DateMixin.shape,
  role: z.string().min(4, 'Role name is required'),
  permissions: z.array(z.string()).optional().default([]),
  description: z.string().optional(),
});
