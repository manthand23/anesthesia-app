import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';

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
            {/* <Button title="Show Answer" style={styles.showButton} onPress={() => setShowValue(!showValue)} />
            {showValue ? 
            <Text style={styles.answer}>Answer: {props.block.answer}</Text>
            : null} */}

            <Pressable style={({ pressed }) => [
                { opacity: pressed ? 0.2 : 1, backgroundColor: 'white' },
                styles.showButton,
            ]} onPress={() => setShowValue(!showValue)}>
                <Text style={styles.buttonText}>Show Answer</Text>
            </Pressable>
            {showValue ? <Text style={styles.answer}>Answer: {props.block.answer}</Text> : null}
        </View>
    );
}

export default Quiz;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        backgroundColor: '#2089dc',
        borderRadius: 10,
        margin: 10,
        padding: 5,
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        color: 'white',
    },
    options: {
        fontSize: 20,
        margin: 2,
        color: 'white',
    },
    showButton: {
        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: 12,
        // paddingHorizontal: 32,
        width: '95%',
        minHeight: 40,
        //borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 5,
       //backgroundColor: 'white',
    },
    buttonText: {
        fontSize: 20,
        // lineHeight: 21,
        // fontWeight: 'bold',
        // letterSpacing: 0.25,
        color: '#2089dc',
    },
    answer: {
        fontSize: 20,
        marginBottom: 5,
        color: 'white',
    },
});