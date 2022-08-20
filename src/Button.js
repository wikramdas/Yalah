import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
export default Button = ({label, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPress && onPress()}
        style={styles.button}>
        <Text>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'skyblue',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
