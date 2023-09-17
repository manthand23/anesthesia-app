import 'react-native-gesture-handler';
import * as React from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView } from 'react-native';

const ContributorsScreen = () => {
    return (
        <SafeAreaView edges={['top', 'bottom', 'left', 'right']} style={{ backgroundColor: 'white' }}>
            <ScrollView style={{ backgroundColor: 'white' }}>
                {/* Editor-in-Chief */}
                <View>
                    <Text style={styles.title}>Editor-in-Chief</Text>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Grace M Xu</Text><Text style={styles.degree}>, BHSc</Text>
                        </View>
                        <Text style={styles.school}>Michael G DeGroote School of Medicine</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>
                </View>

                {/* Authors */}
                <View>
                    <Text style={styles.title}>Authors</Text>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Grace M Xu</Text><Text style={styles.degree}>, BHSc</Text>
                        </View>
                        <Text style={styles.school}>Michael G DeGroote School of Medicine</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>James Zhou</Text><Text style={styles.degree}>, BSc</Text>
                        </View>
                        <Text style={styles.school}>Michael G DeGroote School of Medicine</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>
                </View>

                {/* Section Reviewers */}
                <View>
                    <Text style={styles.title}>Section Reviewers</Text>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Jared Cohen</Text><Text style={styles.degree}>, BSc</Text>
                        </View>
                        <Text style={styles.school}>Michael G DeGroote School of Medicine</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Lauren Riehm</Text><Text style={styles.degree}>, BSc</Text>
                        </View>
                        <Text style={styles.school}>Michael G DeGroote School of Medicine</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Ellen N Connelly</Text><Text style={styles.degree}>, HBSc</Text>
                        </View>
                        <Text style={styles.school}>Michael G DeGroote School of Medicine</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Misha Virdee</Text><Text style={styles.degree}>, BSc</Text>
                        </View>
                        <Text style={styles.school}>Michael G DeGroote School of Medicine</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Gwendolyn Lovsted</Text><Text style={styles.degree}>, BAS</Text>
                        </View>
                        <Text style={styles.school}>Michael G DeGroote School of Medicine</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Grace M Xu</Text><Text style={styles.degree}>, BHSc</Text>
                        </View>
                        <Text style={styles.school}>Michael G DeGroote School of Medicine</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Yvgeniy Oparin</Text><Text style={styles.degree}>, BHSc</Text>
                        </View>
                        <Text style={styles.school}>Michael G DeGroote School of Medicine</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>James Zhou</Text><Text style={styles.degree}>, BSc</Text>
                        </View>
                        <Text style={styles.school}>Michael G DeGroote School of Medicine</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>
                </View>

                {/* Senior Reviewers */}
                <View>
                    <Text style={styles.title}>Senior Reviewers</Text>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Denise Darmawikarta</Text><Text style={styles.degree}>, MD, MPH</Text>
                        </View>
                        <Text style={styles.school}>Department of Anesthesia</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>David Parsons</Text><Text style={styles.degree}>, MD</Text>
                        </View>
                        <Text style={styles.school}>Department of Anesthesia</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Dillon Horth</Text><Text style={styles.degree}>, MBChB</Text>
                        </View>
                        <Text style={styles.school}>Department of Anesthesia</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Jacob Salitur</Text><Text style={styles.degree}>, MD, CCFP (FPA)</Text>
                        </View>
                        <Text style={styles.school}>Department of Anesthesia</Text>
                        <Text style={styles.school}>Orillia Soldiers’ Memorial Hospital</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Russell Lenferna</Text><Text style={styles.degree}>, MD</Text>
                        </View>
                        <Text style={styles.school}>Department of Anesthesia</Text>
                        <Text style={styles.school}>University of Saskatchewan</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Sean Xia</Text><Text style={styles.degree}>, MD</Text>
                        </View>
                        <Text style={styles.school}>Department of Anesthesia</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Natalie Lidster</Text><Text style={styles.degree}>, MD</Text>
                        </View>
                        <Text style={styles.school}>Department of Anesthesia</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Janice Yu</Text><Text style={styles.degree}>, MD</Text>
                        </View>
                        <Text style={styles.school}>Department of Anesthesia</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Catherine Moores</Text><Text style={styles.degree}>, MD</Text>
                        </View>
                        <Text style={styles.school}>Department of Anesthesia</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Songbo Zheng</Text><Text style={styles.degree}>, MD, CCFP (FPA)</Text>
                        </View>
                        <Text style={styles.school}>Department of Anesthesia</Text>
                        <Text style={styles.school}>Woodstock General Hospital</Text>
                    </View>
                </View>

                {/* Staff Reviewers */}
                <View>
                    <Text style={styles.title}>Staff Reviewers</Text>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Rafik Bolis</Text><Text style={styles.degree}>, MBBCh, MSc, CCFP, FRCPC</Text>
                        </View>
                        <Text style={styles.school}>Assistant Clinical Professor</Text>
                        <Text style={styles.school}>Dept. of Anesthesia, McMaster University</Text>
                        <Text style={styles.school}>Director of Bariatric Anesthesia,</Text>
                        <Text style={styles.school}>Undergraduate Site Coordinator,</Text>
                        <Text style={styles.school}>St. Joseph’s Healthcare Hamilton</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>David Lagrotteria</Text><Text style={styles.degree}>, MD, FRCPC</Text>
                        </View>
                        <Text style={styles.school}>Assistant Clinical Professor</Text>
                        <Text style={styles.school}>Dept. of Anesthesia, McMaster University</Text>
                        <Text style={styles.school}>Staff Anesthesiologist, Niagara Health</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Daniel Cordovani</Text><Text style={styles.degree}>, MD, MSc</Text>
                        </View>
                        <Text style={styles.school}>Associate Professor</Text>
                        <Text style={styles.school}>Dept. of Anesthesia, McMaster University</Text>
                        <Text style={styles.school}>Director, Anesthesia Undergraduate Program</Text>
                        <Text style={styles.school}>Staff Anesthesiologist, Hamilton Health Science</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Kevin Latchford</Text><Text style={styles.degree}>, MD, PhD, FRCPC</Text>
                        </View>
                        <Text style={styles.school}>Assistant Clinical Professor</Text>
                        <Text style={styles.school}>Dept. of Anesthesia, McMaster University</Text>
                        <Text style={styles.school}>Staff Anesthesiologist, Grand River</Text>
                        <Text style={styles.school}>Hospital/St Mary’s General Hospital</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Volker Eichhorn</Text><Text style={styles.degree}>, MD</Text>
                        </View>
                        <Text style={styles.school}>Assistant Professor</Text>
                        <Text style={styles.school}>Dept. of Critical Care and</Text>
                        <Text style={styles.school}>Dept. of Anesthesia, Dalhousie University</Text>
                        <Text style={styles.school}>Staff Anesthesiologist, Nova Scotia Health</Text>
                    </View>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Amanda Whippey</Text><Text style={styles.degree}>, MD, FRCPC</Text>
                        </View>
                        <Text style={styles.school}>Assistant Clinical Professor</Text>
                        <Text style={styles.school}>Dept. of Anesthesia, McMaster University</Text>
                        <Text style={styles.school}>Pediatric Anesthesiologist, Hamilton Health Science</Text>
                    </View>
                </View>

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

                {/* Production and Design */}
                <View>
                    <Text style={styles.title}>Production and Design</Text>

                    <View style={styles.person}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.name}>Grace M Xu</Text><Text style={styles.degree}>, BHSc</Text>
                        </View>
                        <Text style={styles.school}>Michael G DeGroote School of Medicine</Text>
                        <Text style={styles.school}>McMaster University</Text>
                    </View>
                </View>

                {/* WRC Research */}
                <View>
                    <Text style={styles.title}>WRC Research</Text>

                    <View style={styles.person}>
                        <Text style={styles.school}>Graham Campbell</Text>
                        <Text style={styles.school}>Andrew Costa, MD, PhD</Text>
                        <Text style={styles.school}>Lindsay Krahn</Text>
                        <Text style={styles.school}>Connor MacAlpine</Text>
                        <Text style={styles.school}>Sarah Penhearow</Text>
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

export default ContributorsScreen;