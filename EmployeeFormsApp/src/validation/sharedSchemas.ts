// src/validation/sharedSchemas.ts

import { z } from 'zod';

// Matches formats like: (416) 123-4567, 416-123-4567, 4161234567
const canadianPhoneRegex = /^(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

// Canadian postal codes follow the pattern A1A 1A1.
// The first letter excludes D, F, I, O, Q, U (not used by Canada Post),
// and the second character (a digit) has no restriction, but we also
// exclude W and Z as the second letter per Canada Post's actual rules.
const canadianPostalCodeRegex =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z] ?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Enter a valid email address');

export const nameSchema = z
  .string()
  .min(2, 'Must be at least 2 characters')
  .max(50, 'Must be under 50 characters');

export const canadianPhoneSchema = z
  .string()
  .min(1, 'Phone number is required')
  .regex(canadianPhoneRegex, 'Enter a valid Canadian phone number');

export const canadianPostalCodeSchema = z
  .string()
  .min(1, 'Postal code is required')
  .regex(canadianPostalCodeRegex, 'Enter a valid Canadian postal code (e.g. A1A 1A1)');

// Base password rule shared by Sign In (login) and Sign Up (creation).
// Sign In only needs the minimum length; Sign Up extends this with
// strength rules in signUpSchema.ts to avoid duplicating the "required" check.
export const passwordMinLengthSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters');