import { ArrowRight } from 'iconsax-react-native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import GenderIcon from './genderIcons';
import { useNavigation } from '@react-navigation/native';
import { CHARACTERDETAIL } from '../../utils/routes';

const CharactersCard = ({ item }) => {

const navigation = useNavigation();

  return (
    <TouchableOpacity 
    onPress={()=> navigation.navigate(CHARACTERDETAIL, {characterID:item.id})}
    style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.image
          }}
        />

      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.species}>{item.species}</Text>
       
        <View style={styles.statusContainer}>
          
          <View>
          <Text style={styles.status}>{item.status}</Text>
          </View>
          <View style={styles.genderContainer}>
            <GenderIcon size={15} gender={item.gender}/>
          <Text style={styles.gender}>{item.gender}</Text>
          </View>
        </View>

      </View>

      <View style={styles.iconContainer}>
        <ArrowRight size={20} color={Colors.black} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#F5F5F5',
    padding: 10,
    margin: 5,
    borderRadius: 10
  },
  imageContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    justifyContent:"space-around"
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    textDecorationLine: "underline"
  },

  species: {
    color: "#99958",
    fontSize: 16,
    textTransform: "capitalize",
    fontWeight: "500",
  },
  statusContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  status:{
    color:"#7f7558"
  },
  gender:{
    color:"#7f7558",
    marginLeft:5
  },
genderContainer:{
flexDirection:"row",
justifyContent:"center",

}
});

export default CharactersCard;