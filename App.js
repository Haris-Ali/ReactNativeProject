import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import CustomButton from './components/ButtonComponent';

export default function App() {
  const [getText, setText] = useState('')
  const [getList, setList] = useState([])

  const addItem = () => {
    if (getText === '') {
      Alert.alert("Cannot add empty item to list")
    }
    else {
      setList([
        ...getList,
        {key: Math.random().toString(), data: getText}
      ])
      setText('')
    }
  }

  const removeItem = (itemKey) => {
    var newList = getList.filter(item => item.key != itemKey)
    setList(newList)
  }

  const displayText = (itemData) => {
    setText(itemData)
  }

  return (

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
          text="ADD" 
          color='cornflowerblue' 
          textSize={24} 
          textColor='white' 
          onPressEvent={addItem} 
          textFamily='monospace'
        />

      </View>

      <Text style={{fontSize: 24, paddingTop: 20, paddingBottom: 20, fontFamily: 'monospace'}}>{getText}</Text>

      <ScrollView style={styles.list}>

        {getList.map((item) => 
          <TouchableOpacity key={item.key} activeOpacity={0.7} onPress={() => displayText(item.data)}>
            <View style={styles.listItems}>
              <Text style={styles.listItemsText}>{item.data}</Text>
              <TouchableOpacity  onPress={() => removeItem(item.key)}>
                <View style={{backgroundColor: 'black', borderRadius: 50, width: 50}}>
                  <Text style={styles.deleteText}>X</Text>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}

      </ScrollView>
    </View>
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
    fontSize: 40,
    color: 'gray',
    fontFamily: 'monospace',
  },

  inputCont: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
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
