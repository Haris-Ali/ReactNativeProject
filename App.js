import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Haris')

  const updateState = () => {
    setName('Ali')
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <View style={styles.buttonStyle}>
        <Button title='Update State' onPress={updateState} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonStyle: {
    margin: 30,
  }
});
