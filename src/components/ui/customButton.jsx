import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../theme/colors';

const CustomButton = (props) => {

    const {backColor,title, tittleColor=Colors.black}=props

  return (
<TouchableOpacity {...props} style={[styles.container, {backgroundColor:backColor}]}>
    <Text style={styles.title,{color:tittleColor}}>{title}</Text>
</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.green,
    padding:8,
    borderRadius:5,
    margin:5
  },
  title: {
    fontSize: 20,
    color:Colors.white
  },
});

export default CustomButton;