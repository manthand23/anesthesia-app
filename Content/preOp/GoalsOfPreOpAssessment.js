import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { data } from './GoalsContent';
import Components from "../../components";

const GoalsOfPreOpAssessment = () => {
    return (
        <SafeAreaView edges={['bottom']}>
            {data.body.map(block => Components(block))}
        </SafeAreaView>
    );
};

export default GoalsOfPreOpAssessment;
