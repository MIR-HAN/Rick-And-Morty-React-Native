import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './tabRouter';
import { CHARACTERDETAIL, FILTERCHARACTER, SEARCHCHARACTER, TABNAVIGATOR } from '../utils/routes';
import CharacterDetail from '../screens/charecters/characterDetail';
import Colors from '../theme/colors';
import FilterCharacters from '../screens/charecters/filterCharacter';
import SearchCharacter from '../screens/charecters/searchCharacter';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.backgroundColor
                },
                headerBackTitle:"Back"
            }}
        >
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name={TABNAVIGATOR}
                component={TabNavigator}
            />
            <Stack.Screen
                name={CHARACTERDETAIL}
                component={CharacterDetail}
            />
               <Stack.Screen
                name={FILTERCHARACTER}
                component={FilterCharacters}
            />
               <Stack.Screen
                name={SEARCHCHARACTER}
                component={SearchCharacter}
            />
        </Stack.Navigator>
    );
};

export default RootNavigator;
