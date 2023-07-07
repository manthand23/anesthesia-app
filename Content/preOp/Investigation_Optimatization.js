import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { investigation } from './InvestigationContentContent';
import Components from "../../components";

const Investigation_Optimization = () => {
    return (
        <SafeAreaView edges={['bottom']}>
            {investigation.body.map(block => Components(block))}
        </SafeAreaView>
    );
};

export default Investigation_Optimization;
