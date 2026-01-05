import { useRef,useEffect } from 'react';
import {  View, Animated, Button } from 'react-native';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const moveX = useRef(new Animated.Value(0)).current
  useEffect(()=>{
    Animated.timing(fadeAnim,{
      toValue:1,
      duration:3000,
      useNativeDriver:true
    }).start()
  })
  function springAnimation(){
    Animated.spring(moveX,{
      toValue:200,
      useNativeDriver:true
    }).start()
  }
  function springBack(){
    Animated.spring(moveX,{
      toValue:0,
      useNativeDriver:true
    }).start()
  }
 

  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      
      <Animated.View style={{height:150,width:150,backgroundColor:"blue",opacity:fadeAnim}}>

      </Animated.View>
      <Animated.View style={{height:150,width:150, backgroundColor:"green",margin:10,transform:[{translateX:moveX}]}}>

      </Animated.View>
      
      <Button title="Animate" onPress={()=>{
        moveX._value == 200? springBack() :springAnimation()
      }}/>
     
    </View>
  );
}
