import React from "react";
import { Dimensions, StyleSheet, View } from 'react-native';
import Image from "react-native-scalable-image";
import photoManager from "../photoManager";

export default props => (
  <View className="photo" style={styles.container}>
    <Image source={photoManager(props.block.src)} width={Dimensions.get('window').width - 10} />
  </View>
);

const styles = StyleSheet.create({
  container: { margin: 5 },
});