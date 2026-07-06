// src/screens/SignInScreen.tsx

import React, { useState } from 'react';
import { Text, StyleSheet, Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ScreenContainer from '../components/ScreenContainer';
import FormInput from '../components/FormInput';
import PasswordInput from '../components/PasswordInput';
import SubmitButton from '../components/SubmitButton';
import { signInSchema, SignInFormData } from '../validation/signInSchema';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';

export default function SignInScreen() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: SignInFormData) => {
    setIsSubmitting(true);
    // Simulates an authentication request. A real app would call an
    // auth API here; this assignment only requires demonstrating the
    // validation + loading-state flow, not a working backend.
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    Alert.alert('Signed In', `Welcome back, ${data.email}.`);
    reset();
  };

  return (
    <ScreenContainer>
      <Text style={[typography.heading, styles.spacingBottom]}>Sign In</Text>

      <FormInput
        control={control}
        name="email"
        label="Email"
        placeholder="you@example.com"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <PasswordInput
        control={control}
        name="password"
        label="Password"
        placeholder="Enter your password"
      />

      <SubmitButton
        label="Sign In"
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