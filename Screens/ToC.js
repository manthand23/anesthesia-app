import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import PreOpAssessment from '../Content/preOp/PreOpAssessment';

const Stack = createStackNavigator();

function Table({ navigation }) {
    return (
        <ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PreOpAssessment')}>
                <Text style={styles.name}>Pre-Operation Assesment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PreOpAssessment')}>
                <Text style={styles.name}>Orientation to the monitors and anesthetic machine</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PreOpAssessment')}>
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
        </ScrollView>
    );
}

const ToC = () => {
    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']} style={{ flex: 1}}>
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
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        // backgroundColor: '#ee2244',
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 5,
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
    }
});

export default ToC;