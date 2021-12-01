import React, { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'buy coffe', key: '1' },
    { text: 'create app', key: '2' },
    { text: 'have fun', key: '3' },
  ]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            // this renders the todos with title: text
            renderItem={({ item }) => (
              // <TodoItem item={item} />
              //  <Text>{item.text}</Text>
              <TodoItem item={item} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  list: {
    marginTop: 20,
  },
});
