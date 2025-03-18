const { z } = require('zod');

const RoleSchema = z.object({
  role: z.string().min(1, 'Role name is required'),
  permissions: z.array(z.string()).optional().default([]),
  description: z.string().optional(),
  isActive: z.boolean().optional().default(true),
  parentRole: z.string().optional().nullable(),
});

module.exports = { RoleSchema };
