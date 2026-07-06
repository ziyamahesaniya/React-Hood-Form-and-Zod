// src/screens/SignUpScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { typography } from '../theme/typography';
import { colors } from '../theme/colors';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text style={typography.body}>Sign up form — built in Phase 8.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});