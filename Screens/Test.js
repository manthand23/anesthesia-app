import elasticlunr from "elasticlunr";
import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
let page = [], loc = [], empty;

function test(question) {

    var index = elasticlunr(function () {
        this.addField('title');
        this.addField('body');
        this.setRef('id');
        this.addField('file');
    });

    var doc1 = {
        "id": 1,
        "file": require("../Content/preOp/GoalsOfPreOpAssessment"),
        "title": "Page 1",
        "body": "test Kair baby Yestaday Oracle has released its new database Oracle 12g, this would make more money for this company and lead to a nice profit report of annual year."
    }

    var doc2 = {
        "id": 2,
        "file": require("../Content/preOp/GoalsOfPreOpAssessment"),
        "title": "Page 2",
        "body": "test test As expected, Oracle released its profit report of 2015, during the good sales of database and hardware, Oracle's revenue of 2015 reached 12.5 Billion."
    }

    var doc3 = {
        "id": 3,
        "file": require("../Content/preOp/GoalsOfPreOpAssessment"),
        "title": "Page 3",
        "body": "test test test baby Yestaday Oracle has released its new database Oracle 12g, this would make more money for this company and lead to a nice loss report of annual year."
    }

    index.addDoc(doc1);
    index.addDoc(doc2);
    index.addDoc(doc3);

    let ansLen = index.search(question, {}).length;

    if (ansLen == 0) {
        // IDK HOW TO SOLVE THIS YET
        console.log("GG you're screwed");
        empty = true;
    } else if (ansLen > 0) {
        console.log("wtf");
        for (var i = 0; i < ansLen; i++) {
            page[i] = index.documentStore.getDoc(index.search(question, {})[i].ref);
            loc[i] = page[i].file;
            console.log("i = " + i);
        }
    }
};

function Table({ navigation }) {
    if (empty == true) {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.container}>
                    <Text style={styles.name}>Search term not found!</Text>
                </View>
            </ScrollView>
        );
    } else if (page.length == 1) {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(page[0].title)}>
                        <Text style={styles.name}>{page[0].title}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    } else if (page.length == 2) {
        return (
            <ScrollView> style={{ backgroundColor: 'white' }}
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(page[0].title)}>
                        <Text style={styles.name}>{page[0].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(page[1].title)}>
                        <Text style={styles.name}>{page[1].title}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    } else if (page.length == 3) {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(page[0].title)}>
                        <Text style={styles.name}>{page[0].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(page[1].title)}>
                        <Text style={styles.name}>{page[1].title}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(page[2].title)}>
                        <Text style={styles.name}>{page[2].title}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const UploadContent = ({ route }) => {
    const abc = route.params.inputText;
    console.log("Input text: " + abc)

    page = [], loc = [];
    empty = false;
    test(abc);
    if (page.length == 0) {
        return (
            <SafeAreaView edges={['top', 'bottom', 'left', 'right']} style={{ flex: 1, backgroundColor: 'white' }}>
                <NavigationContainer independent={true}>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <   Stack.Screen
                            name='Search Results'
                            component={Table}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        );
    } else if (page.length == 1) {
        return (
            <SafeAreaView edges={['top', 'bottom', 'left', 'right']} style={{ flex: 1, backgroundColor: 'white'  }}>
                <NavigationContainer independent={true}>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <   Stack.Screen
                            name='Search Results'
                            component={Table}
                        />
                        <Stack.Screen
                            name={page[0].title}
                            component={loc[0]}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        );
    } else if (page.length == 2) {
        return (
            <SafeAreaView edges={['top', 'bottom', 'left', 'right']} style={{ flex: 1, backgroundColor: 'white'  }}>
                <NavigationContainer independent={true}>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <   Stack.Screen
                            name='Search Results'
                            component={Table}
                        />
                        <Stack.Screen
                            name={page[0].title}
                            component={loc[0]}
                        />
                        <Stack.Screen
                            name={page[1].title}
                            component={loc[1]}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        );
    } else if (page.length == 3) {
        return (
            <SafeAreaView edges={['top', 'bottom', 'left', 'right']} style={{ flex: 1, backgroundColor: 'white'  }}>
                <NavigationContainer independent={true}>
                    <Stack.Navigator screenOptions={{ headerShown: false }}>
                        <   Stack.Screen
                            name='Search Results'
                            component={Table}
                        />
                        <Stack.Screen
                            name={page[0].title}
                            component={loc[0]}
                        />
                        <Stack.Screen
                            name={page[1].title}
                            component={loc[1]}
                        />
                        <Stack.Screen
                            name={page[2].title}
                            component={loc[2]}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    button: {
        // backgroundColor: '#ee2244',
        width: '90%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 5,
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
    },
    input: {
        height: 50,
        width: '75%',
        margin: 12,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        fontSize: 18,
    },
});

export default UploadContent;