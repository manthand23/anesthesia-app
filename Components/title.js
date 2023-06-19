import React from "react";
import { View, Text } from 'react-native';

export default props => (
    <View className="title">
        <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 10, textAlign: "center" }}>{props.block.text}</Text>
    </View>
);