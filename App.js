import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback 
} from 'react-native';
import CustomButton from './components/ButtonComponent';
import { todoItems } from './constants/onrenderitems';

export default function App() {
  const [getText, setText] = useState('')
  const [getList, setList] = useState(todoItems)
  const [getKey, setKey] = useState('')
  const [getButton, setButton] = useState('ADD')

  const addItem = () => {
    if (getText === '') {
      Alert.alert("Cannot add empty item to list")
    }
    if (getButton === 'UPDATE') {
      var list = getList
      for (let index = 0; index < list.length; index++) {
        var element = list[index]
        if (getKey !== '' && element.key === getKey) {
          element.data = getText
        }
      }
      setKey('')
      setList(list)
      setButton('ADD')
      setText('')
    }
    else {
      setList([
        ...getList,
        {key: Math.random().toString(), data: getText}
      ])
      setText('')
      Keyboard.dismiss()
    }
  }

  const removeItem = (itemKey) => {
    var newList = getList.filter(item => item.key != itemKey)
    setList(newList)
  }

  const displayText = (item) => {
    setText(item.data)
    setButton('UPDATE')
    setKey(item.key)
  }

  const displayScrollView = (
    <ScrollView style={styles.list}>

        {getList.map((item, index) => 
          <TouchableOpacity key={item.key} activeOpacity={0.7} onPress={() => displayText(item)}>
            <View style={styles.listItems}>
              <Text style={styles.listItemsText}>{index + 1}. {item.data}</Text>
              <TouchableOpacity  onPress={() => removeItem(item.key)}>
                <View style={{backgroundColor: 'black', borderRadius: 50, width: 50}}>
                  <Text style={styles.deleteText}>X</Text>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}

      </ScrollView>
  )

  const displayEmptyView = (
    <View style={{ paddingTop: 30 }}>
      <Text style={{fontStyle: "italic", fontSize: 24, color: 'black', fontFamily: 'monospace'}}>
        You have no todo items
      </Text>
    </View>
  )

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }} >
      <View style={styles.container}>
        <Text style={styles.titleText}>TODO LIST</Text>
        <View style={styles.inputCont}>
          <TextInput 
            style={styles.textInput} 
            placeholder="Enter Item"
            onChangeText= {text => setText(text)}
            value={getText}
          />
          <CustomButton 
            text={getButton} 
            color='cornflowerblue' 
            textSize={24} 
            textColor='white' 
            onPressEvent={addItem} 
            textFamily='monospace'
            disabled={getText.length <= 0}
          />
        </View>
        {getList.length <= 0 ? displayEmptyView : displayScrollView }
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 130,
  },

  titleText: {
    fontSize: 50,
    color: 'gray',
    fontFamily: 'monospace',
  },

  inputCont: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
  },

  textInput: {
    borderColor: 'black',
    borderWidth: 2,
    width: '70%',
    borderRadius: 50,
    fontSize: 24,
    padding: 10,
    fontFamily: 'monospace',
    textAlign: 'center',
  },

  list: {
    width: '100%',
    paddingTop: 80,
  },

  listItems: {
    flexDirection: 'row',
    backgroundColor: 'cornflowerblue',
    alignSelf: 'center',
    width: '80%',
    padding: 10,
    margin: 3,
    borderRadius: 50,
    justifyContent: 'space-between',
  },

  listItemsText: {
    fontSize: 24,
    color: 'white',
    padding: 12,
    fontFamily: 'monospace',
  },

  deleteText: {
    fontSize: 24,
    color: 'white',
    padding: 12,
    fontFamily: 'monospace',
    textAlign: 'center',
    fontWeight: 'bold',
  }

});