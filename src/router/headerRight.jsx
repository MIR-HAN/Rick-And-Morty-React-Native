import { FilterSearch, SearchNormal, } from 'iconsax-react-native';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { FILTERCHARACTER, SEARCHCHARACTER } from '../utils/routes';


const HeadreRight = () => {

  const navigation =useNavigation()

  return (
    <View style={styles.container}>

      <Pressable
      onPress={()=> navigation.navigate(SEARCHCHARACTER)}
      style={styles.button}>
        <SearchNormal size={27} color={Colors.black} />
      </Pressable>
      <Pressable 
        onPress={()=> navigation.navigate(FILTERCHARACTER)}
      style={styles.button}>
        <FilterSearch size={27} color={Colors.black} />
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent:"center",
    alignItems: "center",
    marginHorizontal: 5
  },
  button:{
    marginHorizontal:5
  }
});

export default HeadreRight;