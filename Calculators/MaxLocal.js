import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { ButtonGroup } from '@rneui/themed'

const MaxLocal = () => {
    const [drug, setDrug] = useState(0);
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState(0);
    const [concentration, setConcentration] = useState(0);
    const [result, setResult] = useState(0);

    function roundToTwo(num) {
        return +(Math.round(num + "e+2") + "e-2");
    }

    useEffect(() => {
        if (weight > 0) {
            if (drug == 0) { a = 1 }
            else if (drug == 1) { a = 2 }
            else if (drug == 2) { a = 3 }
            else if (drug == 3) { a = 4 }

            if (unit == 0) { b = (weight) / 10 }
            else if (unit == 1) { b = (weight * 0.45359237) / 10 }

            if (concentration == 0) { c = 0.25 }
            if (concentration == 1) { c = 0.50 }
            if (concentration == 2) { c = 0.75 }
            if (concentration == 3) { c = 1 }
            if (concentration == 4) { c = 1.5 }
            if (concentration == 5) { c = 2 }
            if (concentration == 6) { c = 3 }
            if (concentration == 7) { c = 4 }

            console.log('a: ' + a + ', b: ' + b + ', c: ' + c);
            setResult(roundToTwo(a * b * c))
            console.log(result + 'ml')
        }
    }, [drug, weight, unit, concentration]
    );

    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']} style={{ flex: 1 }}>
            <ScrollView>
                <View>
                    <Text style={styles.title}>Drug</Text>
                    <ButtonGroup vertical
                        textStyle={styles.button}
                        buttons={['Bupivacaine', 'Lidocaine', 'Mepivacain', 'Ropivacaine']}
                        selectedIndex={drug}
                        underlayColor="red"
                        onPress={(value) => {
                            setDrug(value);
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.title}>Weight</Text>
                    <View style={{ alignItems: 'center' }}>
                        <TextInput
                            keyboardType='decimal-pad'
                            placeholder={'Weight...'}
                            style={styles.input}
                            onChangeText={(text) => {
                                setWeight(text);
                            }}
                        />
                        <ButtonGroup
                            textStyle={styles.button}
                            buttons={['Kgs', 'Lbs']}
                            selectedIndex={unit}
                            onPress={(value) => {
                                setUnit(value);
                            }}
                        />
                    </View>
                </View>
                <View>
                    <Text style={styles.title}>Concentration</Text>
                    <ButtonGroup vertical
                        textStyle={styles.button}
                        buttons={['0.25%', '0.5%', '0.75%', '1%', '1.5%', '2%', '3%', '4%']}
                        selectedIndex={concentration}
                        onPress={(value) => {
                            setConcentration(value);
                        }}
                    />
                </View>
                <View>
                    <Text style={styles.title}>Result</Text>
                    <Text style={styles.result}>{result} ml</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
    },
    button: {
        fontSize: 15,
    },
    input: {
        height: 40,
        width: '95%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        fontSize: 15,
    },
    result: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default MaxLocal;