import { Book1, Command, Man,Woman } from 'iconsax-react-native';
import { View, } from 'react-native';
import { CHARACTERS, EPISODES, LOCATIONS, SETTINGS } from '../utils/routes';
import { genderTypes } from '../../utils/constants';
import Colors from '../../theme/colors';

const GenderIcon = ({ gender, size }) => {


  if (gender === genderTypes.MALE) {
    return (
    
        <Man size={size} color={Colors.black}  />
    
    );
  }
  if (gender === genderTypes.FEMALE) {
    return (
    
        <Woman size={size} color={Colors.black}  />
    
    );
  }

  if (gender === genderTypes.UNKNOWN) {
    return (
    
        <Command size={size} color={Colors.black}  />
    
    );
  }





};

export default GenderIcon;



