import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { Feed } from './screens/Feed';
import { Bored } from './screens/Bored';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from '@reduxjs/toolkit';
import { user } from './reducers/user';

const Drawer = createDrawerNavigator();

const reducer = combineReducers({
  // first and only slice
  user,
});

const store = createStore(
  reducer // reducer property equals to reducer variable (on line 12)
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Feed' component={Feed} />
          <Drawer.Screen name='Bored' component={Bored} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
