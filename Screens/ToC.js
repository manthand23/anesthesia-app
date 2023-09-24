import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import PreOpAssessment from '../Content/preOp/PreOpAssessment';
import Orientation from '../Content/orientation/Orientation';
import Airway from '../Content/airway/Airway';

const Stack = createStackNavigator();

function Table({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PreOpAssessment')}>
                    <Text style={styles.name}>Pre-Operation Assesment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Orientation')}>
                    <Text style={styles.name}>Orientation to the monitors and anesthetic machine</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Airway')}>
                    <Text style={styles.name}>Airway management, intubation, and emergencies</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PreOpAssessment')}>
                    <Text style={styles.name}>Fluid management and resuscitation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PreOpAssessment')}>
                    <Text style={styles.name}>Pain control</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PreOpAssessment')}>
                    <Text style={styles.name}>Obstetrical anesthesia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PreOpAssessment')}>
                    <Text style={styles.name}>Pediatric anesthesia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PreOpAssessment')}>
                    <Text style={styles.name}>Basic pharmacology in anesthesia</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PreOpAssessment')}>
                    <Text style={styles.name}>Quick drug reference</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PreOpAssessment')}>
                    <Text style={styles.name}>Appendix: Anesthesia checklists</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const ToC = () => {
    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']} style={{ flex: 1, backgroundColor: 'white'  }}>
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name='Table of Contents'
                        component={Table}
                    />
                    <Stack.Screen
                        name='PreOpAssessment'
                        component={PreOpAssessment}
                    />
                    <Stack.Screen
                        name='Orientation'
                        component={Orientation}
                    />
                    <Stack.Screen
                        name='Airway'
                        component={Airway}
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
        // Calc on select button - 
        backgroundColor: '#2089dc',
        //backgroundColor: 'white',
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
        color: 'white',
        // Calc on select button font - color: '#5e6977',
    }
});

export default ToC;