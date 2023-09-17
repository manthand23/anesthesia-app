import 'react-native-gesture-handler';
import * as React from 'react';
import { Image, View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { SearchBar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import UploadContent from './Test';

const Stack = createStackNavigator();

function InputScreen({ navigation }) {
  const [input, setInput] = React.useState('');

  return (
    <SafeAreaView edges={['top', 'bottom', 'left', 'right']} style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Anesthesia:</Text>
          <Text style={styles.header}>A Clerkship Pocket Guide</Text>
        </View>

        <View>
          <TextInput
            placeholder="Search..."
            style={styles.input}
            onChangeText={(input) => setInput(input)}
            onSubmitEditing={() => navigation.navigate('Destination', { inputText: input })}
          />
        </View>
        <Image style={styles.logo} source={require('../assets/MacLogo.png')} />
      </View >
    </SafeAreaView>
  );
}

const HomeScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Input" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Destination" component={UploadContent} />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 28,
  },
  input: {
    height: 50,
    width: 325,
    //margin: 12,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
  },
  logo: {
    width: '75%',
    height: '15%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
  }
});

export default HomeScreen;