import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { data } from './ETTContent';
import Components from "../../components";

const ETT = () => {
    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']}>
            <ScrollView>
                {data.body.map(block => Components(block))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default ETT;