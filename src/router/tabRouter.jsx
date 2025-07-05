import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Characters from '../screens/charecters';
import Episodes from '../screens/episodes';
import Locations from '../screens/locations';
import SettingsScreen from '../screens/settings';
import Colors from '../theme/colors';
import { TabBarStyles } from '../styles/tabBarStyles';
import { CHARACTERS, EPISODES, LOCATIONS, SETTINGS } from '../utils/routes';
import TabIcon from './tabIcon';
import { Text } from 'react-native';
import HeadreRight from './headerRight';



const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon screenName={route.name} size={size} color={color} focused={focused} />
        ),
        headerStyle: TabBarStyles.headerStyle,
        tabBarStyle: TabBarStyles.tabBarStyle,
        tabBarActiveTintColor: Colors.black,
        headerRight:(props)=> (
          <HeadreRight/>
        )
      })}
    >
      <Tab.Screen name={CHARACTERS} component={Characters} />
      <Tab.Screen name={EPISODES} component={Episodes} />
      <Tab.Screen name={LOCATIONS} component={Locations} />
      <Tab.Screen name={SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;