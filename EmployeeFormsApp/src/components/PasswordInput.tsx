// src/components/PasswordInput.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';
import { spacing, radius } from '../theme/spacing';
import { typography } from '../theme/typography';

interface PasswordInputProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  placeholder?: string;
}

export default function PasswordInput<TFieldValues extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: PasswordInputProps<TFieldValues>) {
  const [isFocused, setIsFocused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <View style={styles.wrapper}>
          <Text style={typography.label}>{label}</Text>
          <View
            style={[
              styles.inputRow,
              isFocused && styles.inputFocused,
              error && styles.inputError,
            ]}
          >
            <TextInput
              value={value as string}
              onChangeText={onChange}
              onBlur={() => {
                onBlur();
                setIsFocused(false);
              }}
              onFocus={() => setIsFocused(true)}
              secureTextEntry={!isVisible}
              placeholder={placeholder}
              placeholderTextColor={colors.textMuted}
              style={styles.input}
              accessibilityLabel={label}
            />
            <Pressable
              onPress={() => setIsVisible((prev) => !prev)}
              accessibilityRole="button"
              accessibilityLabel={isVisible ? 'Hide password' : 'Show password'}
              hitSlop={8}
            >
              <Ionicons
                name={isVisible ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={colors.textMuted}
              />
            </Pressable>
          </View>
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
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
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
  input: {
    flex: 1,
    paddingVertical: spacing.sm + 4,
    fontSize: 16,
    color: colors.text,
  },
});