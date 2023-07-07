import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { PreOpAssessment, PreOpAssessment2} from '../Content/preOp/PreOpAssessment';

const Stack = createStackNavigator();

function Table({ navigation }) {
    return (
        <ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PreOpAssessment')}>
                <Text style={styles.name}>Pre-Operation Assesment</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const ToC = () => {
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
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
                        name='PreOpAssessment2'
                        component={PreOpAssessment2}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    button: {
        // backgroundColor: '#ee2244',
        width: '95%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        padding: 5,
    },
    name: {
        fontSize: 20,
    }
});

export default ToC;