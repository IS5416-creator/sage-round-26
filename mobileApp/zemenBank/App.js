import { View, ScrollView, Button, TextInput } from 'react-native';

import { useState } from 'react'

export default function App() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  return (<ScrollView>
    <View>
      <TextInput
        placeholder="First name"
        style={{ borderWidth: 2, padding: 10, margin: 10 }}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Last name"
        style={{ borderWidth: 2, padding: 10, margin: 10 }}
      />
      <TextInput
        keyboardType="email-adress"
        placeholder="EMAIL"
        style={{ borderWidth: 2, padding: 10, margin: 10 }}
      />
      <TextInput
        secureTextEntry
        placeholder="password"
        style={{ borderWidth: 2, padding: 10, margin: 10 }}
      />
      <TextInput
        keyboardType='phone-pad'
        placeholder="phone number"
        style={{ borderWidth: 2, padding: 10, margin: 10 }}
      />
      <Button title="REGISTER" onPress={() => { alert(name) }} />
    </View>
  </ScrollView>
  );
}
