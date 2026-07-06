// src/screens/SignUpScreen.tsx

import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ScreenContainer from '../components/ScreenContainer';
import FormInput from '../components/FormInput';
import PasswordInput from '../components/PasswordInput';
import SubmitButton from '../components/SubmitButton';
import { signUpSchema, SignUpFormData } from '../validation/signUpSchema';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';

export default function SignUpScreen() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    setIsSubmitting(true);
    const { confirmPassword, ...accountData } = data;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    reset();
  };

  return (
    <ScreenContainer>
      <Text style={[typography.heading, styles.spacingBottom]}>Sign Up</Text>

      <FormInput
        control={control}
        name="fullName"
        label="Full Name"
        placeholder="Jane Doe"
        autoCapitalize="words"
        autoComplete="name"
        textContentType="name"
      />
      <FormInput
        control={control}
        name="email"
        label="Email"
        placeholder="you@example.com"
        autoCapitalize="none"
        keyboardType="email-address"
        autoComplete="email"
        textContentType="emailAddress"
      />
      <PasswordInput
        control={control}
        name="password"
        label="Password"
        placeholder="At least 8 characters"
      />
      <PasswordInput
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Re-enter your password"
      />

      <SubmitButton
        label="Sign Up"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
        isLoading={isSubmitting}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  spacingBottom: {
    marginBottom: spacing.lg,
  },
});