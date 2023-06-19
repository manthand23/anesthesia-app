import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import { SelectList } from 'react-native-dropdown-select-list';
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