import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import {useColorScheme} from '../themeProvider';
import {useTheme} from '../themeProvider';

const {width, height} = Dimensions.get('screen');

export const ColorSchemeButton = () => {
  const theme = useTheme();
  const {toggle, colorScheme, active} = useColorScheme();

  const FireEvent = () => {
    if (!active) {
      toggle(width * 0.9, height * 0.05);
    }
  };

  return (
    <TouchableOpacity onPress={() => FireEvent()}>
      <Feather
        name={colorScheme === 'light' ? 'moon' : 'sun'}
        color={theme.colors.mainForeground}
        size={30}
      />
    </TouchableOpacity>
  );
};
