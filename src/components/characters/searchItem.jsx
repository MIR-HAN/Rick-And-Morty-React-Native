import { useNavigation } from '@react-navigation/native';
import { ArrowForward, ArrowRight } from 'iconsax-react-native';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Colors from '../../theme/colors';
import { CHARACTERDETAIL } from '../../utils/routes';


const SearchItem = ({ item }) => {

    const navigation = useNavigation()

    return (
        <Pressable
            onPress={() => navigation.navigate(CHARACTERDETAIL, { characterID: item.id })}
            style={styles.container}>
            <Text style={styles.name}>{item.name}</Text>
            <ArrowRight
                size="28"
                color={Colors.black}
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth:0.5,
        borderColor:Colors.brown

    },
    name: {
        fontSize: 18,
    }

});

export default SearchItem;