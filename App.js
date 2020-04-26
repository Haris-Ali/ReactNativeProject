import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Form from './components/FormComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Form />
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

});
