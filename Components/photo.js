import React from "react";
import { StyleSheet, View, Image } from 'react-native';
import photoManager from "../photoManager";

export default props => (
  <View className="photo" style={styles.container}>
    <Image source={ photoManager( props.block.src ) } style={styles.photo}/>
  </View>
);

const styles = StyleSheet.create({
  container: { margin: 5 },
  photo: {
    width: '100%',
    height: '40%',
    resizeMode: "contain"
  }
});