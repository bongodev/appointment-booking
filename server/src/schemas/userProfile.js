import { z } from "zod";
import { userSchema } from "./user.js"
import { DateMixin } from "./mixin.js";

export const userProfileSchema = z.object({
    ...userSchema.shape.omit('password'),
    address: z.object({
        street: z.string().optional(),
        city: z.string().optional(),
        zipCode: z.string().optional(),
        country: z.string().optional(),
      }).optional(),
      dateOfBirth: z.date().optional(),
      preferredContactMethod: z.enum(["email", "phone", "sms"]),
      preferences: z.object({
        appointmentReminders: z.boolean().default(true),
        reminderTime: z.number.default(24),
        preferredDays: z.array(z.string()).optional(),
        preferredTimeofTheDay: z.enum['morning', 'afternoon', 'night'].optional(),
      }),
    ...DateMixin.shape,
})