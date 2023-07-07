import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { data1 } from './1';
import Components from "../../components";

const PreOpAssessment = () => {
    return (
        <SafeAreaView edges={['bottom']}>
            {data1.body.map(block => Components(block))}
        </SafeAreaView>
    );
}

export default (PreOpAssessment);