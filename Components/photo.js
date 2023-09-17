import React from "react";
import { Dimensions, StyleSheet, View } from 'react-native';
import Image from "react-native-scalable-image";
import photoManager from "../photoManager";

export default props => (
  <View className="photo" style={styles.container}>
    <Image source={photoManager(props.block.src)} width={Dimensions.get('window').width - 20} height={300}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignSelf: 'center',
  },
});