import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default props => (
    <View className="title">
        <Text style={styles.text}>{props.block.text}</Text>
    </View>
);

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 10,
        textAlign: "center",
        //paddding: 15
    }
})