import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Feed } from './screens/Feed';
import { Bored } from './screens/Bored';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { View } from 'react-native';

import { Header } from './components/Header';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <View>
      <Header />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Feed'>
          <Drawer.Screen name='Feed' component={Feed} />
          <Drawer.Screen name='Bored' component={Bored} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
