
import { Text, View, Image, TextInput, Button, ScrollView, ActivityIndicator, Switch } from 'react-native';
import {useState} from 'react'
import Card from './Card'

export default function App() {
  const [x,setX]=useState(0)
  const [isOn,setIsOn]=useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (<ScrollView>
    <View style={{backgroundColor:isDarkMode ? '#121212' : '#ffffff'}} >
      <Text>hello from the other side!</Text>
      <Text>the value of x is {x}</Text>
      
      <Image
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIOsQgOKrn_Qf4OMVjI0dU75e_hZlgEiUnKg&s'}}
      style={{width:500,height:300}}
      />
      <TextInput
      placeholder="enter your name"
      style={{borderWidth:2, padding:10, margin:10}}
      />
      <Button title="submit" onPress={()=>{setX(20)}}/>
      <ActivityIndicator size="small" color="blue"/>
      <Switch value={isOn} onValueChange={setIsOn} 
      trackColor={{ false: '#ff0000ff', true: '#1c52afff' }}
      thumbColor={isOn ? '#ffffffff' : '#000000ff'}/>
      <Text>DARK MODE <Switch
        value={isDarkMode}
        onValueChange={() => setIsDarkMode(!isDarkMode)}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
      /></Text>
      <Text style={{color:"blue",fontFamily: "sanserif", fontSize:30, margin: 20}}>Styled text</Text>
      <View style={{flex: 1, flexDirection: 'row', justifyContent:"space-around"}}>
        <Card/>
        <Card/>
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: "space-around"}}>
        <Card/>
        <Card/>
      </View>
    </View>
  </ScrollView>
  );
}

