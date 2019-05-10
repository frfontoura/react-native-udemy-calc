import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'flex-end',
  },
  displayValue: {
    fontSize: 60,
    color: '#fff',
  }, 
  displayCurrent: {
    alignSelf: 'flex-start',
    fontSize: 20,
    color: '#fff',
  }
})

export default function Display({ value, currentValue, operation }) {
  return (
    <View style={styles.display}>
      <Text style={styles.displayCurrent} numberOfLines={1}>
        { currentValue || '' } { operation || '' }
      </Text>
      <Text style={styles.displayValue} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
}
