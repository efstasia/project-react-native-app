import React, { useState } from 'react';
import { Text, TouchableHighlight, View, Button } from 'react-native';

import { Bored } from './Bored';
//import { useDispatch, useSelector } from 'react-redux';

//import user from '../reducers/user';

import styled from 'styled-components/native';

// This is the main container for this screen
const FeedContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #faf0e6;
  height: 100vh;
`;

const TextInputField = styled.TextInput`
  border: 2px solid black;
`;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Feed = ({ navigation }) => {
  const [user, setUser] = useState('');

  // const onPress = () => {
  //   setUser(user === '' ? '' : setUser);
  // };

  return (
    <FeedContainer>
      <Text>Enter name here</Text>
      <TextInputField
        placeholder='e.g JohnDoe'
        //    onChangeText={(value) => {
        //setUser(value)
        //setUser(value === '' ? '' : value) // value is latest

        //}}
        onChangeText={user => setUser(user)}
        value={user}
      ></TextInputField>

      <View>
        <Text>{user ? <Text>Hello {user} 🌞</Text> : ''}</Text>
      </View>

      <TouchableHighlight onPress={() => navigation.navigate('Bored')}>
        <Text>I'm bored, give me an activity"</Text>
      </TouchableHighlight>
    </FeedContainer>
  );
};
