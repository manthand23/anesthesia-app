import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { data } from './ExtubationContent';
import Components from "../../components";

const Extubation = () => {
    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']}>
            <ScrollView>
                {data.body.map(block => Components(block))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Extubation;