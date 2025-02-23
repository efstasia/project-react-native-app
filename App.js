import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './screens/Home';
import { Bored } from './screens/Bored';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Header } from './components/Header';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Header />
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Activities' component={Bored} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
