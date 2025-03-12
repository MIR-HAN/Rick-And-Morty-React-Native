import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './tabRouter';
import { TABNAVIGATOR } from '../utils/routes';

const Stack = createStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name={TABNAVIGATOR}
                component={TabNavigator}
            />
        </Stack.Navigator>
    );
};

export default RootNavigator;
