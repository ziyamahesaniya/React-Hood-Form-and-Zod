// src/validation/employeeSchema.ts

import { z } from 'zod';
import {
  emailSchema,
  nameSchema,
  canadianPhoneSchema,
  canadianPostalCodeSchema,
} from './sharedSchemas';

export const employeeSchema = z.object({
  fullName: nameSchema,
  email: emailSchema,
  phoneNumber: canadianPhoneSchema,
  employeeId: z
    .string()
    .min(1, 'Employee ID is required')
    .max(20, 'Employee ID must be under 20 characters'),
  postalCode: canadianPostalCodeSchema,
  department: z
    .string()
    .min(2, 'Department is required')
    .max(50, 'Must be under 50 characters'),
  jobTitle: z
    .string()
    .min(2, 'Job title is required')
    .max(50, 'Must be under 50 characters'),
});

export type EmployeeFormData = z.infer<typeof employeeSchema>;