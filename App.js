import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

class Test extends React.Component {
  constructor() {
    super()
    this.state = {
      input: '',
    }
  }

  updateInput = (buttonID) => {
    this.setState({input: this.state.input + buttonID})
  }

  render() {
    return (
      <View>                                                        
        <Text style={testStyles.text}>{this.state.input}</Text>

        <View style={testStyles.buttons}>

          <Button style={testStyles.buttonStyles} title='1' 
          onPress={() => { this.updateInput(1) }} />
          <Button style={testStyles.buttonStyles} title='2' 
          onPress={() => { this.updateInput(2) }} />
          <Button style={testStyles.buttonStyles} title='3'
          onPress={() => { this.updateInput(3) }} />
          <Button style={testStyles.buttonStyles} title='4'
          onPress={() => { this.updateInput(4) }} />
          <Button style={testStyles.buttonStyles} title='5'
          onPress={() => { this.updateInput(5) }} />
          <Button style={testStyles.buttonStyles} title='6'
          onPress={() => { this.updateInput(6) }} />
          <Button style={testStyles.buttonStyles} title='7'
          onPress={() => { this.updateInput(7) }} />
          <Button style={testStyles.buttonStyles} title='8'
          onPress={() => { this.updateInput(8) }} />
          <Button style={testStyles.buttonStyles} title='9'
          onPress={() => { this.updateInput(9) }} />
          <Button style={testStyles.buttonStyles} title='0'
          onPress={() => { this.updateInput(0) }} />
        
        </View>

      </View>
    )
  }
}

const testStyles = StyleSheet.create({
  text: {
    fontSize: 30,
    backgroundColor: 808080,
    width: 400,
    textAlign: "center",
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: "space-between",
    width: '90%',
    margin: 10,
  }, 

  buttonStyles: {
    width: 100,
  },

})

export default function App() {
  return (
    <View style={styles.container}>
      <Test />
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
