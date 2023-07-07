import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { data } from './GoalsContent';
import Components from "../../components";

const GoalsOfPreOpAssessment = () => {
    return (
        <SafeAreaView edges={['bottom']}>
            <ScrollView>
                {data.body.map(block => Components(block))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default GoalsOfPreOpAssessment;
