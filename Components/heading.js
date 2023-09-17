import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default props => (
  <View className="heading">
    <Text style={styles.text}>{props.block.text}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginHorizontal: 10,
    textAlign: 'center',
  }
})