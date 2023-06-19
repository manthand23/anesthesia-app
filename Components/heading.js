import React from "react";
import { View, Text } from 'react-native';

export default props => (
  <View className="heading">
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>{props.block.text}</Text>
  </View>
);