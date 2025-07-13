import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScreenStyles } from '../../styles/screensStyles';
import CustomButton from '../../components/ui/customButton';
import Colors from '../../theme/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { genders, status } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { changeParams, getCharacterList } from '../../store/actions/characterActions';
import { useNavigation } from '@react-navigation/native';

const FilterCharacters = () => {

  const {params}=useSelector(state=>state.characters)
  const dispatch = useDispatch();
  const navigation = useNavigation()



  const filterCharacters = ()=>{
    navigation.goBack()

  }

  const clearFilter=()=>{ 

   dispatch(changeParams({gender:null,status:null})) 
    navigation.goBack()
  }


  console.log(params)
  return (
    <View style={ScreenStyles.container}>
      <View style={{ flex: 1 }}>

        <ScrollView>
          <Text style={{ fontSize: 18, color: Colors.brown, fontWeight: "bold", marginVertical: 10 }}>Gender</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", }}>
            {
              genders.map((item) => (
                <TouchableOpacity
                onPress={()=>dispatch(changeParams({gender:item.value}))}
                  style={{
                    backgroundColor: params.gender==item.value? Colors.green : Colors.brown,
                    padding: 10,
                    margin: 3,
                    borderRadius: 5,
                    minWidth: "20%",
                    justifyContent:"center",
                    alignItems:"center"
                  }}
                  key={item.id}>
                  <Text
                    style={{
                      color: Colors.white
                    }}
                  >{item.name}</Text>
                </TouchableOpacity>

              ))

            }
          </View>

          <Text style={{ fontSize: 18, color: Colors.brown, fontWeight: "bold", marginVertical: 10 }}>Status</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-evenly", }}>
            {
              status.map((item) => (
                <TouchableOpacity
                onPress={()=> dispatch(changeParams({status:item.value}))}
                  style={{
                    backgroundColor: params.status==item.value? Colors.green : Colors.brown,
                    padding: 10,
                    margin: 3,
                    borderRadius: 5,
                    minWidth: "20%",
                    justifyContent:"center",
                    alignItems:"center"
                  }}
                  key={item.id}>
                  <Text
                    style={{
                      color: Colors.white
                    }}
                  >{item.name}</Text>
                </TouchableOpacity>

              ))

            }
          </View>
        </ScrollView>

      </View>
      <View style={{ flexDirection: "row", paddingBottom: 20 }}>
        <CustomButton 
        onPress={()=> filterCharacters()}
        title="filter" backColor={Colors.green} tittleColor={Colors.white} />
        <CustomButton 
        onPress={()=> clearFilter()}
        title="Clear" backColor={Colors.BackTitleColor} />
      </View>

    </View>
  );
};



export default FilterCharacters;