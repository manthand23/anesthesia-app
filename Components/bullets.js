import React from "react";
import { View, Text, FlatList } from 'react-native';

export default props => (
  <View className="bullets">
    {/* <Text style={{ fontSize: 20 }}>{`\u2022 ${props.block.text}`}</Text> */}

    {props.block.text.map((line) => {
        return (
          <View>
            <Text style={{ fontSize: 20, margin: 2 }}>{`\u2022 ${line}`}</Text>
          </View>
        );
      })}
  </View>
);