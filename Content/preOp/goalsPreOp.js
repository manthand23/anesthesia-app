import 'react-native-gesture-handler';
import * as React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const goalsPreOp = () => {
    return (
        <SafeAreaView edges={['bottom']}>
            <ScrollView>
                {/* Illustrator */}
                <View>
                    <Text style={styles.title}>Illustrator</Text>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Adhora Mir</Text><Text style={styles.degree}>, BSc</Text>
                        </View>
                        <Text style={styles.school}>Michael G DeGroote School of Medicine</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    person: {
        paddingTop: 5,
    },
    title: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 20,
        textDecorationLine: 'underline',
        padding: 10,
        paddingBottom: 5,
    },
    name: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 10,
    },
    degree: {
        textAlign: 'left',
        fontSize: 15,
    },
    school: {
        textAlign: 'left',
        fontSize: 15,
        paddingLeft: 10,
    },
});

export default goalsPreOp;