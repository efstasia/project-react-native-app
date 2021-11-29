import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
  Image,
} from 'react-native';
import styled from 'styled-components/native';

const QuoteText = styled.Text`
  font-weight: 700;
`;

const Container = styled.View`
  border: 2px solid green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const APIButton = styled.TouchableHighlight`
  border-radius: 10px;

  text-transform: uppercase;
  background: #161616;
  padding: 5px;
  width: 70%;
  text-align: center;
  margin: 0 auto;
`;

const ApiButtonText = styled.Text`
  color: yellow;
  width: 100%;
`;

const ButtonContainer = styled.View`
  display: flex;
  justify-content: center;
  border: 2px solid red;
`;

export const Bored = () => {
  const [activity, setActivity] = useState({});
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   generateActivity();
  // }, []);

  const generateActivity = () => {
    setLoading(true);
    fetch('https://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(json => setActivity(json))
      .finally(setLoading(false));
  };

  if (loading) {
    <ActivityIndicator />;
  }

  return (
    <>
      <Container>
        <Image source={require('../assets/bored.png')} />
        <ButtonContainer>
          <APIButton onPress={generateActivity}>
            <ApiButtonText>I'm bored, give me something to do</ApiButtonText>
          </APIButton>
        </ButtonContainer>
        <View>
          <QuoteText>Activity: {activity.activity}</QuoteText>
          <Text>Type: {activity.type}</Text>
        </View>
      </Container>
    </>
  );
};
