import React from "react";
import { View, Text } from 'react-native';

export default props => (
  <View className="bullets">
    {props.block.text.map((line) => {
        return (
          <View>
            <Text style={{ fontSize: 20, margin: 2 }}>{`\u2022 ${line}`}</Text>
          </View>
        );
      })}
  </View>
);