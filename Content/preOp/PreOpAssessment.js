import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import GoalsOfPreOpAssessment from './GoalsOfPreOpAssessment';

const Stack = createStackNavigator();

function Table({ navigation }) {
    return (
        <ScrollView>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GoalsOfPreOpAssessment')}>
                <Text style={styles.name}>Goals of Pre-Op Assessment</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={handlePress}>
                <Text style={styles.button}>Investigation and Optimization</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.button}>Immediate Pre-Op Assessment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.button}>Post-operative nausea/vomiting (PONV)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.button}>PACU handover</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.button}>Complications & emergencies</Text>
            </TouchableOpacity> */}
        </ScrollView>
    );
}

const PreOpAssessment = () => {
    return (
        <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
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
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    button: {
      //backgroundColor: '#eaeaea',
      width: '90%',
      height: 40,
      padding: 5,
      borderWidth: 1,
      borderRadius: 10,
      margin: 10,
      fontSize: 20,
      alignItems: 'center'
    },
  });
  

export default PreOpAssessment;

