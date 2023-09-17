import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default props => (
  <View className="bullets" style={styles.container}>
    <Table borderStyle={{ borderWidth: 1, borderColor: 'black' }}>
      <Row data={props.block.tableHead} style={styles.head} textStyle={styles.headText} />
      <Rows data={props.block.tableData} textStyle={styles.text} />
    </Table>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  head: {
    backgroundColor: '#2089dc',
    
  },
  headText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    padding: 5,
  },
  text: {
    fontSize: 15,
    textAlign: 'left',
    margin: 5,
  }
});