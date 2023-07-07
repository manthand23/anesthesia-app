import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const Quiz = (props) => {
    const [showValue, setShowValue] = useState(false);

    return (
        <View className="quiz" style={styles.container}>

            {/* Question */}
            <Text style={styles.question}>{props.block.question}</Text>

            {/* Options */}
            {props.block.options.map((line) => {
                return (
                    <View>
                        <Text style={styles.options}>{`\u2022 ${line}`}</Text>
                    </View>
                );
            })}

            {/* Answer */}
            <Button title="Show Answer" onPress={() => setShowValue(!showValue)} />
            {showValue ? <Text style={styles.answer}>Answer: {props.block.answer}</Text> : null}
        </View>
    );
}

export default Quiz;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        // backgroundColor: '#ff4d4d',
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    options: {
        fontSize: 20,
        margin: 2
    },
    answer: {
        fontSize: 20,
        marginBottom: 5
    },
});