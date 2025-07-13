import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { ScreenStyles } from '../../styles/screensStyles';
import { useDispatch, useSelector } from 'react-redux';
import { changeParams, getCharacterList } from '../../store/actions/characterActions';
import SearchItem from '../../components/characters/searchItem';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../theme/colors';
import CustomButton from '../../components/ui/customButton';

const SearchCharacter = () => {

  const { characterList, params } = useSelector(state => state.characters)
  const [searchText, setSearchText] = useState(null)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacterList(params));

  }, [])

  const handleSubmit = () => {
    dispatch(changeParams({ name: searchText }))
  }

  const ListHeaderComponent = () => {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TextInput
          value={searchText}
          placeholder='search character'
          clearButtonMode='while-editing'
          placeholderTextColor={Colors.brown}
          style={{
            width: "95%",
            height: 50,
            backgroundColor: Colors.BackTitleColor,
            borderWidth: 0.5,
            borderRadius: 100,
            borderColor: Colors.black,
            padding: 5
          }}
          onChangeText={(text) => {
            setSearchText(text)
          }}

        />
        <CustomButton
          onPress={()=>handleSubmit()}
          title="Search" backColor={Colors.green} />

      </View>

    )
  }


  return (
    <View style={ScreenStyles.container}>

      <FlatList
        data={characterList}
        renderItem={({ item }) => (
          <SearchItem item={item} />


        )}
        ListHeaderComponent={ListHeaderComponent}
      />


    </View>
  );
};

export default SearchCharacter;
