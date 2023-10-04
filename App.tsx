import React from 'react';
import {ColorSchemeProvider} from './src/themeProvider';
import Navigation from './src/navigation/index';
import {NavigationContainer} from '@react-navigation/native';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ColorSchemeProvider>
        <Navigation />
      </ColorSchemeProvider>
    </NavigationContainer>
  );
}
