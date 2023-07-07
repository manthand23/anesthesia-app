import 'react-native-gesture-handler';
import * as React from 'react';
import { Image, View, Text, TextInput, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [input, setInput] = React.useState('');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Text style={styles.header}>Anesthesia:</Text>
        <Text style={styles.header}>A Clerkship Pocket Guide</Text>
      </View>

      <TextInput
        placeholder="Search..."
        style={styles.input}
        onChangeText={setInput}
      />

      <Image style={styles.logo} source={require('../assets/MacLogo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 28,
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
  logo: {
    width: '75%',
    height: '15%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
  }
});

export default HomeScreen;