// src/validation/signInSchema.ts

import { z } from 'zod';
import { emailSchema, passwordMinLengthSchema } from './sharedSchemas';

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordMinLengthSchema,
});

export type SignInFormData = z.infer<typeof signInSchema>;