import { z } from 'zod';

export const RoleSchema = z.object({
  role: z.string().min(4, 'Role name is required'),
  permissions: z.array(z.string()).optional().default([]),
  description: z.string().optional(),
});
