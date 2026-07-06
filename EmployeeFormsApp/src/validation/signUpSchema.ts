// src/validation/signUpSchema.ts

import { z } from 'zod';
import { emailSchema, nameSchema, passwordMinLengthSchema } from './sharedSchemas';

// Extends the shared minimum-length rule with strength requirements
// specific to account creation — Sign In intentionally does not
// require these, since it's just checking an existing password.
const strongPasswordSchema = passwordMinLengthSchema
  .regex(/[A-Z]/, 'Must include at least one uppercase letter')
  .regex(/[a-z]/, 'Must include at least one lowercase letter')
  .regex(/[0-9]/, 'Must include at least one number');

export const signUpSchema = z
  .object({
    fullName: nameSchema,
    email: emailSchema,
    password: strongPasswordSchema,
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;