import { Book1, Location, LocationTick, PresentionChart, Setting, Setting2, Settings } from 'iconsax-react-native';
import { View, } from 'react-native';
import { CHARACTERS, EPISODES, LOCATIONS, SETTINGS } from '../utils/routes';

const TabIcon = ({ screenName, color, focused, size }) => {


  if (screenName === CHARACTERS) {
    return (
      <View>
        <Book1 size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />
      </View>
    );
  }

  if (screenName === EPISODES) {
    return (
      <View>
        <PresentionChart size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />
      </View>
    );
  }

  if (screenName === LOCATIONS) {
    return (
      <View>
        <LocationTick size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />
      </View>
    );
  }

  if (screenName === SETTINGS) {
    return (
      <View>
        <Setting2 size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />
      </View>
    );
  }

  return null;
};

export default TabIcon;



