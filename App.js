import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Navigators from './src/navigator/Navigators';
import BottomTabs from './src/navigator/BottomTabs';

const App = () => {
  return (
    <NavigationContainer>
      <Navigators />
    </NavigationContainer>
  );
};

export default App