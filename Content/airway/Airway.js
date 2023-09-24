import 'react-native-gesture-handler';
import { TouchableOpacity, Text, StyleSheet, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Bag from './Bag';
import Indications from './Indications';
import Direct from './Direct';
import ETT from './ETT';
import Venti from './Venti';
import Hypo from './Hypo';
import Extubation from './Extubation';
import Complications from './Complications';

const Stack = createStackNavigator();

function Table({ navigation }) {
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bag')}>
                    <Text style={styles.name}>Bag-mask Ventilation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Indications')}>
                    <Text style={styles.name}>Indications for Intubation/Mechanical Ventilation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Direct')}>
                    <Text style={styles.name}>Direct Laryngoscopy and Intubation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ETT')}>
                    <Text style={styles.name}>Supraglottic Airway vs Endotracheal Tube</Text>
                </TouchableOpacity>   
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Venti')}>
                    <Text style={styles.name}>Ventilation vs Oxygenation</Text>
                </TouchableOpacity>  
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Hypo')}>
                    <Text style={styles.name}>Hypoventilation and Hypoxemia</Text>
                </TouchableOpacity> 
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Extubation')}>
                    <Text style={styles.name}>Criteria for Extubation</Text>
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
                        name='Bag'
                        component={Bag}
                    />
                    <Stack.Screen
                        name='Indications'
                        component={Indications}
                    />
                    <Stack.Screen
                        name='Direct'
                        component={Direct}
                    />
                     <Stack.Screen
                        name='ETT'
                        component={ETT}
                    />
                    <Stack.Screen
                        name='Venti'
                        component={Venti}
                    />
                     <Stack.Screen
                        name='Hypo'
                        component={Hypo}
                    />
                     <Stack.Screen
                        name='Extubation'
                        component={Extubation}
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

