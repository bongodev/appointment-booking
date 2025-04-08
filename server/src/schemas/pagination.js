import z from 'zod';

export const paginationSchema = z.object({
  hits: z.array(z.any()).optional(),
  total: z.number().nonnegative({ message: 'Total can not be non negative' }),
  page: z.number().min(1, 'Page number must be at least 1'),
  limit: z.number().min(1, 'Limit must be at least 1'),
});
