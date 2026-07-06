// src/screens/SignInScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { typography } from '../theme/typography';
import { colors } from '../theme/colors';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text style={typography.body}>Sign in form — built in Phase 7.</Text>
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