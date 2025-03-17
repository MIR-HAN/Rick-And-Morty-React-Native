import React, { useEffect } from 'react';
import { View, Text,FlatList } from 'react-native';
import { ScreenStyles } from '../../styles/screensStyles';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacterList } from '../../store/actions/characterActions';


const Characters = () => {

  const {characterList} = useSelector(state=>state.characters)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList());

  }, [])


  return (
    <View style={ScreenStyles.container}>
      <FlatList
      data={characterList}
      renderItem={({item})=> (
        <Text>{item.name}</Text>
      )}
      />
    </View>
  );
};

export default Characters;
