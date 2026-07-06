// src/screens/HomeScreen.tsx

import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/types';
import { colors } from '../theme/colors';
import { spacing, radius } from '../theme/spacing';
import { typography } from '../theme/typography';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const menuItems: {
  label: string;
  screen: keyof RootStackParamList;
  icon: keyof typeof Ionicons.glyphMap;
}[] = [
  { label: 'Employee Information Form', screen: 'EmployeeForm', icon: 'person-outline' },
  { label: 'Sign In', screen: 'SignIn', icon: 'log-in-outline' },
  { label: 'Sign Up', screen: 'SignUp', icon: 'person-add-outline' },
];

export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <View style={styles.content}>
        <Text style={typography.heading}>Welcome</Text>
        <Text style={[typography.subheading, styles.subtitle]}>
          Choose a form to get started
        </Text>

        {menuItems.map((item) => (
          <Pressable
            key={item.screen}
            onPress={() => navigation.navigate(item.screen)}
            accessibilityRole="button"
            accessibilityLabel={item.label}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <Ionicons name={item.icon} size={20} color={colors.white} />
            <Text style={styles.buttonText}>{item.label}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'center',
  },
  subtitle: {
    color: colors.textMuted,
    marginTop: spacing.xs,
    marginBottom: spacing.xl,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
    gap: spacing.sm,
  },
  buttonPressed: {
    backgroundColor: colors.primaryPressed,
  },
  buttonText: {
    color: colors.white,
    ...typography.button,
  },
});