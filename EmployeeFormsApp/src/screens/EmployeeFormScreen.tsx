// src/screens/EmployeeFormScreen.tsx

import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ScreenContainer from '../components/ScreenContainer';
import FormInput from '../components/FormInput';
import SubmitButton from '../components/SubmitButton';
import { employeeSchema, EmployeeFormData } from '../validation/employeeSchema';
import { typography } from '../theme/typography';
import { spacing } from '../theme/spacing';

export default function EmployeeFormScreen() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
    mode: 'onTouched',
    reValidateMode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      employeeId: '',
      postalCode: '',
      department: '',
      jobTitle: '',
    },
  });

  const onSubmit = async (data: EmployeeFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    reset();
  };

  return (
    <ScreenContainer>
      <Text style={[typography.heading, styles.spacingBottom]}>
        Employee Information
      </Text>

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
        placeholder="jane.doe@company.com"
        autoCapitalize="none"
        keyboardType="email-address"
        autoComplete="email"
        textContentType="emailAddress"
      />
      <FormInput
        control={control}
        name="phoneNumber"
        label="Phone Number"
        placeholder="(416) 123-4567"
        keyboardType="phone-pad"
        autoComplete="tel"
        textContentType="telephoneNumber"
      />
      <FormInput
        control={control}
        name="employeeId"
        label="Employee ID"
        placeholder="EMP-00123"
        autoCapitalize="characters"
      />
      <FormInput
        control={control}
        name="postalCode"
        label="Postal Code"
        placeholder="A1A 1A1"
        autoCapitalize="characters"
        autoComplete="postal-code"
        textContentType="postalCode"
      />
      <FormInput
        control={control}
        name="department"
        label="Department"
        placeholder="Engineering"
        autoCapitalize="words"
      />
      <FormInput
        control={control}
        name="jobTitle"
        label="Job Title"
        placeholder="Software Developer"
        autoCapitalize="words"
        textContentType="jobTitle"
      />

      <SubmitButton
        label="Submit"
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