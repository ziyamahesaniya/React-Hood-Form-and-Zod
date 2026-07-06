// src/screens/EmployeeFormScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { typography } from '../theme/typography';
import { colors } from '../theme/colors';

export default function EmployeeFormScreen() {
  return (
    <View style={styles.container}>
      <Text style={typography.body}>Employee form — built in Phase 6.</Text>
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