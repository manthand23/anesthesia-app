import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import MaxLocal from '../Calculators/MaxLocal';

const Stack = createStackNavigator();

function Table({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MaxLocal')}>
                    <Text style={styles.name}>Maximum Allowable Local Anesthetics</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const CalculatorsScreen = () => {
    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']} style={{ flex: 1, backgroundColor: 'white' }}>
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name='Calculators'
                        component={Table}
                    />
                    <Stack.Screen
                        name='MaxLocal'
                        component={MaxLocal}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    button: {
        // Calc on select button - backgroundColor: '#2089dc',
        backgroundColor: 'white',
        width: '90%',
        minHeight: 40,
        //borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    name: {
        fontSize: 18,
        textAlign: 'center',
        // Calc on select button font - color: '#5e6977',
    }
});


export default CalculatorsScreen;