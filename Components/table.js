import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default props => (
  <View className="bullets" >
    <Table borderStyle={{ borderWidth: 2, borderColor: 'black' }}>
      <Row data={props.block.tableHead} style={styles.head} textStyle={styles.text} />
      <Rows data={props.block.tableData} />
    </Table>
  </View>
);

const styles = StyleSheet.create({
  //container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { backgroundColor: 'lightgrey' },
  text: { fontSize: 15, fontWeight: 'bold', textAlign: 'center'}
});