import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ScreenStyles } from '../../styles/screensStyles';
import { useDispatch, useSelector } from 'react-redux';
import { changeParams, getCharacterList, loadMoreCharacter } from '../../store/actions/characterActions';
import Spinner from '../../components/ui/spinner';

import CharactersCard from '../../components/characters/characters';

const Characters = () => {

  const { characterList, pending, params } = useSelector(state => state.characters)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList(params));

  }, [params])

  const handleMoreLoad = () => {

    let page = params.page + 1
    dispatch(changeParams({ page: page }))
    dispatch(loadMoreCharacter(params))
  }


  return (
    <View style={ScreenStyles.container}>

      {
        pending ?
          <Spinner /> :
          <FlatList
            data={characterList}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            renderItem={({ item}) => (
              <CharactersCard item={item} />

            )}
            onEndReachedTreshold={0.5}
            onEndReached={handleMoreLoad}
            ListFooterComponent={
              <Spinner />
            }

          />
      }



    </View>
  );
};

export default Characters;
