import 'react-native-gesture-handler';
import * as React from 'react';
import { Image, View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import UploadContent from './Test';

const Stack = createStackNavigator();

function InputScreen({ navigation }) {
    const [input, setInput] = React.useState('');

    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']} style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    placeholder="Search..."
                    style={styles.input}
                    onChangeText={(input) => setInput(input)}
                    onSubmitEditing={() => navigation.navigate('Destination', { inputText: input })}
                />
            </View>
        </SafeAreaView>
    );
}

const SearchScreen = () => {
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
    },
    input: {
        height: 50,
        width: '75%',
        margin: 12,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
    },
});

export default SearchScreen;