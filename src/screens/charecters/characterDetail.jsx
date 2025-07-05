import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { ScreenStyles } from '../../styles/screensStyles';
import { getSingleCharacter, resetData } from '../../store/actions/characterActions';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../components/ui/spinner';
import { ScrollView } from 'react-native-gesture-handler';

import { characterDetailStyles } from '../../styles/characterStyles';
import { statusType } from '../../utils/constants';

const CharacterDetail = ({ route }) => {


  const { pendingForSingleCharacter, singleCharacter } = useSelector((state) => state.characters)
  const { characterID } = route?.params

  const dispatch = useDispatch()


  useEffect(() => {

    dispatch(getSingleCharacter(characterID))
    

  }, [])


  return (
    <View style={ScreenStyles.container}>
      {
        pendingForSingleCharacter ?
          <Spinner /> :
          <ScrollView>
            <View style={characterDetailStyles.imageContainer}>
              <Image
                style={characterDetailStyles.image}
                source={{
                  uri: singleCharacter.image
                }}
              />
              <View style={
                singleCharacter.status == statusType.Alive ? characterDetailStyles.aliveStatusContainer : characterDetailStyles.deadStatusContainer
              }>
                <Text style={characterDetailStyles.status}>{singleCharacter.status}</Text>
              </View>
              <Text style={characterDetailStyles.name}>{singleCharacter.name}</Text>
            </View>

            <View style={characterDetailStyles.sectionContainer}>
              <Text style={characterDetailStyles.sectionTitle}>PROPORTIES</Text>

              <View style={characterDetailStyles.rowContainer}>

                <View style={characterDetailStyles.infoContainer}>
                  <Text>Gender</Text>
                </View>

                <View style={characterDetailStyles.infoBox}>
                  <Text>{singleCharacter.gender}</Text>
                </View>

              </View>

              {/*------------------*/}

              <View style={characterDetailStyles.rowContainer}>

                <View style={characterDetailStyles.infoContainer}>
                  <Text>Species</Text>
                </View>

                <View style={characterDetailStyles.infoBox}>
                  <Text>{singleCharacter.species}</Text>
                </View>

              </View>

              {/*------------------*/}

              <View style={characterDetailStyles.rowContainer}>

                <View style={characterDetailStyles.infoContainer}>
                  <Text>Status</Text>
                </View>

                <View style={characterDetailStyles.infoBox}>
                  <Text>{singleCharacter.status}</Text>
                </View>

              </View>



            </View>

            <View style={characterDetailStyles.sectionContainer}>
              <Text style={characterDetailStyles.sectionTitle}>WHEREABOUTS</Text>
            </View>

            <View style={characterDetailStyles.rowContainer}>

              <View style={characterDetailStyles.infoContainer}>
                <Text>Origin</Text>
              </View>

              <View style={characterDetailStyles.infoBox}>
                <Text>{singleCharacter?.origin?.name}</Text>
              </View>

            </View>

            <View style={characterDetailStyles.rowContainer}>

              <View style={characterDetailStyles.infoContainer}>
                <Text>Location</Text>
              </View>

              <View style={characterDetailStyles.infoBox}>
                <Text>{singleCharacter?.location?.name}</Text>
              </View>

            </View>

            <View style={characterDetailStyles.sectionContainer}>
              <Text style={characterDetailStyles.sectionTitle}>FEATURE CHAPTERS</Text>
            </View>

            <View style={characterDetailStyles.rowContainer}>

              <View style={characterDetailStyles.infoContainer}>
                <Text>Created</Text>
              </View>

              <View style={characterDetailStyles.infoBox}>
                <Text>{singleCharacter?.created?.split("T")[0]}</Text>
              </View>

            </View>




          </ScrollView>


      }



    </View>
  );
};



export default CharacterDetail;