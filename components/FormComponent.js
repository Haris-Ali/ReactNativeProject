import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            username: 'abc'
        }
    }

    updateState = (val) => {
        this.setState({username: val})
    }

    render() {
        return (
            <View>
                <Text style={formStyles.text}>Username: {this.state.username}</Text>
                <TextInput style={formStyles.textInput} onChangeText={(val) => this.updateState(val)} />
            </View>
        )
    }
}

const formStyles = StyleSheet.create({
    text: {
        fontSize: 30,
    },

    textInput: {
        fontSize: 30,
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
    }
})

export default Form;