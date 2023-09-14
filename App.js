import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Screens/Home';
//import SearchScreen from './Screens/Search';
import CalculatorsScreen from './Screens/Calculators';
import ContributorsScreen from './Screens/Contributors';
import ToC from './Screens/ToC';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={ HomeScreen } options={{ headerTitle:'' }} />
        <Drawer.Screen name="Table of Contents" component={ ToC } options={{ headerTitle:'' }} />
        {/* <Drawer.Screen name="Search" component={ SearchScreen } /> */}
        <Drawer.Screen name="Calculators" component={ CalculatorsScreen } />
        <Drawer.Screen name="Contributors" component={ ContributorsScreen } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}