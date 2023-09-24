import 'react-native-gesture-handler';
import { TouchableOpacity, Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import CAS from './CAS';
import Basics from './Basics';
import Complications from './Complications';
import Machine from './Machine';
import SOAP from './SOAP';

const Stack = createStackNavigator();

function Table({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CAS')}>
                    <Text style={styles.name}>CAS Standard Monitoring Guidelines</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Basics')}>
                    <Text style={styles.name}>Basics of mechanical ventilation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Complications')}>
                    <Text style={styles.name}>Complications and Emergencies</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Machine')}>
                    <Text style={styles.name}>The Anesthetic Machine</Text>
                </TouchableOpacity>   
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SOAP')}>
                    <Text style={styles.name}>Preparing the OR - SOAP-IM</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const Orientation = () => {
    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']} style={{ flex: 1, backgroundColor: 'white' }}>
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen
                        name='Table of Contents'
                        component={Table}
                    />
                    <Stack.Screen
                        name='CAS'
                        component={CAS}
                    />
                    <Stack.Screen
                        name='Basics'
                        component={Basics}
                    />
                     <Stack.Screen
                        name='Complications'
                        component={Complications}
                    />
                    <Stack.Screen
                        name='Machine'
                        component={Machine}
                    />
                     <Stack.Screen
                        name='SOAP'
                        component={SOAP}
                    />                    
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    button: {
        //backgroundColor: '#eaeaea',
        width: '90%',
        height: 40,
        padding: 5,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center'
    },
    name: {
        fontSize: 18,
    }
});


export default Orientation;

