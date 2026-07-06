// src/components/FormInput.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { colors } from '../theme/colors';
import { spacing, radius } from '../theme/spacing';
import { typography } from '../theme/typography';

interface FormInputProps<TFieldValues extends FieldValues>
  extends Omit<TextInputProps, 'value' | 'onChangeText' | 'onBlur'> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
}

export default function FormInput<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  ...textInputProps
}: FormInputProps<TFieldValues>) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View style={styles.wrapper}>
          <Text style={typography.label}>{label}</Text>
          <TextInput
            {...textInputProps}
            value={value as string}
            onChangeText={onChange}
            onBlur={() => {
              onBlur();
              setIsFocused(false);
            }}
            onFocus={() => setIsFocused(true)}
            style={[
              styles.input,
              isFocused && styles.inputFocused,
              error && styles.inputError,
            ]}
            placeholderTextColor={colors.textMuted}
            accessibilityLabel={label}
          />
          {error && (
            <Text style={typography.error} accessibilityRole="alert">
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: spacing.md,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm + 4,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.surface,
    marginTop: spacing.xs,
  },
  inputFocused: {
    borderColor: colors.borderFocused,
    borderWidth: 2,
  },
  inputError: {
    borderColor: colors.error,
  },
});