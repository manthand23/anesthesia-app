import { View, StyleSheet } from 'react-native';

export default props => (
    <View className="Line" style = {styles.lineStyle} />
);


const styles = StyleSheet.create({
  lineStyle:{
        borderWidth: 0.5,
        borderColor:'grey',
        margin:10,
   }
 });