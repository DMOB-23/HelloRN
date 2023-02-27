import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

const App = () => {
  const [name, setName] = useState('')

  const sayHello = () => {
    Alert.alert('Hello', `Hello, ${name}!`)
  }

  return (
    <View>
      <Text>Hello, world!</Text>
      <TextInput onChangeText={setName} />
      <Button title='Hello!' onPress={sayHello} />
    </View>
  )
}

export default App;
