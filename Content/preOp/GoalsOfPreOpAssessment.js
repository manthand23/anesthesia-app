import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import {TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GoalsOfPreOpAssessment = () => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('GoalsContent');
    };

    return (
        <SafeAreaView edges={['bottom']}>
        <TouchableOpacity onPress={handlePress}>
        <Text>IDK</Text>
        </TouchableOpacity>
    </SafeAreaView>
        );
};

export default GoalsOfPreOpAssessment;
