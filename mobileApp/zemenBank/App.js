import { View, ScrollView, Button, TextInput, Image } from 'react-native';

import { useState } from 'react'

export default function App() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  return (<ScrollView>
    <View style={{ padding: 10 }}>
      <Image
  source={require('./assets/image.png')}
  style={{width: 120,
  height: 120,
  alignSelf: 'center',
  marginBottom: 20,}}
/>
      <TextInput
        placeholder="First name"
        style={{
          borderWidth: 1,
          borderColor: '#999',
          padding: 12,
          borderRadius: 6,
          margin:10
        }}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Last name"
        style={{
          borderWidth: 1,
          borderColor: '#999',
          padding: 12,
          margin:10,
          borderRadius: 6,
        }}
      />
      <TextInput
        keyboardType="email-adress"
        placeholder="EMAIL"
        style={{
          borderWidth: 1,
          borderColor: '#999',
          padding: 12,
          margin:10,
          borderRadius: 6,
        }}
      />
      <TextInput
        secureTextEntry
        placeholder="password"
        style={{
          borderWidth: 1,
          borderColor: '#999',
          padding: 12,
          margin:10,
          borderRadius: 6,
        }}
      />
      <TextInput
        keyboardType='phone-pad'
        placeholder="phone number"
        style={{
          borderWidth: 1,
          borderColor: '#999',
          padding: 12,
          margin:10,
          borderRadius: 6,
        }}
      />
      <Button title="REGISTER" onPress={() => { alert(name) }} />
    </View>
  </ScrollView>
  );
}
