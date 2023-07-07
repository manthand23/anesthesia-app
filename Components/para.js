import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default props => (
  <View className="para">
    <Text style={ styles.bold }>{props.block.bold}<Text style={ styles.text }>{props.block.text}</Text></Text>
  </View>
);

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: "normal",
    },
    bold: {
      fontWeight: "bold",
    },
});