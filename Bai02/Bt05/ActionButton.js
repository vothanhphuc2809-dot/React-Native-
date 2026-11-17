import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

export default function ActionButton({
  onPress,
  title,
  disabled
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.disabled
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2563EB',
    padding: 17,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    elevation: 3
  },
  disabled: {
    backgroundColor: '#16A34A'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold'
  }
});

