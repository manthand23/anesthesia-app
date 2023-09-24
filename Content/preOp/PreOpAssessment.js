import 'react-native-gesture-handler';
import { TouchableOpacity, Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import GoalsOfPreOpAssessment from './GoalsOfPreOpAssessment';
import InvestigationOptimization from './Investigation_Optimatization';
import ImmediatePreOp from './Immediate';
import PONV from './PONV';
import PACU from './PACU';
import Complications from './Complications';

const Stack = createStackNavigator();

function Table({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GoalsOfPreOpAssessment')}>
                    <Text style={styles.name}>Goals of Pre-Op Assessment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InvestigationOptimization')}>
                    <Text style={styles.name}>Investigation and Optimization</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ImmediatePreOp')}>
                    <Text style={styles.name}>Immediate Pre-Op Assessment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PONV')}>
                    <Text style={styles.name}>Post-operative Nausea/Vomiting</Text>
                </TouchableOpacity>   
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PACU')}>
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
                        name='GoalsOfPreOpAssessment'
                        component={GoalsOfPreOpAssessment}
                    />
                    <Stack.Screen
                        name='InvestigationOptimization'
                        component={InvestigationOptimization}
                    />
                    <Stack.Screen
                        name='ImmediatePreOp'
                        component={ImmediatePreOp}
                    />
                     <Stack.Screen
                        name='PONV'
                        component={PONV}
                    />
                    <Stack.Screen
                        name='PACU'
                        component={PACU}
                    />
                     <Stack.Screen
                        name='Complications'
                        component={Complications}
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

