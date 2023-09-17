import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default props => (
  <View className="bullets" style={styles.continer}>
    {props.block.text.map((line) => {
        return (
          <View>
            <Text style={styles.text}>{`\u2022 ${line}`}</Text>
          </View>
        );
      })}
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  continer: {
    marginVertical: 10
  }
})