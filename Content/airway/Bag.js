import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { data } from './BagContent';
import Components from "../../components";

const Bag = () => {
    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']}>
            <ScrollView>
                {data.body.map(block => Components(block))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Bag;