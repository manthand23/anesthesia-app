import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { data } from './GoalsContent';
import Components from "../../components";


const GoalsOfPreOpAssessment = () => {
        <SafeAreaView edges={['bottom']}>
            <TouchableOpacity onPress={handlePress}>
                {data.body.map(block => Components(block))}
            </TouchableOpacity>
        </SafeAreaView>
};

export default GoalsOfPreOpAssessment;
