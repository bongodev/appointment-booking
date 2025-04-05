import { z } from 'zod';

import { DateMixin, IDSchema } from './mixin.js';

export const slotPreferenceSchema = z.object({
    ...IDSchema.shape,
    ...DateMixin.shape,
    user: z.string(),
    weeklySlots: z.array([z.string]),
});