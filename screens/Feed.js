import React, { useState } from 'react';
import { Text, Button, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

//import user from '../reducers/user';

import styled from 'styled-components/native';

// This is the main container for this screen
const FeedContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TextInputField = styled.TextInput`
  border: 2px solid black;
`;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Feed = () => {
  const [user, setUser] = useState('');
  // const showUser = useSelector(store => store.user.username); // store + "the slice" + items from slice in todos.js

  // const dispatch = useDispatch();

  const handleNameChange = event => {
    setUser(event.target.value);
  };

  const onNameSet = event => {
    setUser(user);
  };

  return (
    <FeedContainer>
      <Text>Feed Screen</Text>
      <TextInputField onChangeText={handleNameChange} />

      <Button title='add name' onPress={() => setUser(user)} />
      {/* <Text>Hello {user}</Text> */}

      {/* Here is an example of how to open/toggle the drawer via javascript */}
      {/* <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}
    </FeedContainer>
  );
};
