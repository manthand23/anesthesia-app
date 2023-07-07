import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import MaxLocal from '../Calculators/MaxLocal';

const Stack = createStackNavigator();

function Table({ navigation }) {
  return (
      <ScrollView>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MaxLocal')}>
              <Text style={styles.name}>Maximum Allowable Local Anesthetics</Text>
          </TouchableOpacity>
      </ScrollView>
  );
}

const CalculatorsScreen = () => {
  return (
    <SafeAreaView edges={['top', 'bottom', 'left', 'right']} style={{ flex: 1 }}>
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


export default CalculatorsScreen;