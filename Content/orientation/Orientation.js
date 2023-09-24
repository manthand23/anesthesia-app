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
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CAS Standard Monitoring Guidelines')}>
                    <Text style={styles.name}>Goals of Pre-Op Assessment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Basics of mechanical ventilation')}>
                    <Text style={styles.name}>Investigation and Optimization</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Complications and Emergencies')}>
                    <Text style={styles.name}>Immediate Pre-Op Assessment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('The Anesthetic Machine')}>
                    <Text style={styles.name}>Post-operative Nausea/Vomiting</Text>
                </TouchableOpacity>   
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Preparing the OR - SOAP-IM')}>
                    <Text style={styles.name}>PACU Handover</Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Complications')}>
                    <Text style={styles.name}>Complications & Emergencies</Text>
                </TouchableOpacity> 
            </View>
        </ScrollView>
    );
}

const PreOpAssessment = () => {
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
                    <Stack.Screen
                        name='PACU'
                        component={PACU}
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


export default PreOpAssessment;

