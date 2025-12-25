import { View, ScrollView, Button, Text, TextInput } from 'react-native';

import { useState } from 'react'

export default function App() {
  const [name, setName] = useState()
  return (<ScrollView>
    <View>
      <TextInput
        placeholder=" ENTER YOUR FULL NAME"
        style={{ borderWidth: 2, padding: 10, margin: 10 }}
        value={name}
        onChangeText={setName}
      />
      <Button title="SUBMIT" onPress={() => { alert(name) }} />
    </View>
    <Text>your name is {name}</Text>
  </ScrollView>
  );
}
