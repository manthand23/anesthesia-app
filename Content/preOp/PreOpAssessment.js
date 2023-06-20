import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { data } from './1';
import Components from "../../components";

const PreOpAssessment = () => {
    return (
        <SafeAreaView edges={['bottom']}>
            {data.body.map(block => Components(block))}
        </SafeAreaView>
    );
}


export default PreOpAssessment;