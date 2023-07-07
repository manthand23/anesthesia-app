import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PreOpAssessment = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('GoalsOfPreOpAssessment');
    };

    return (
        <SafeAreaView edges={['bottom']}>
            <TouchableOpacity onPress={handlePress}>
                <Text style={styles.button}>Goals of Pre-Op Assessment</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
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
            </TouchableOpacity>
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

