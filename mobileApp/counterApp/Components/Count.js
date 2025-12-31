
import {   Button, Text, View } from 'react-native';
import {useSelector, useDispatch} from "react-redux";
import { decrement, increment, reset } from './Redux/Slices/Counter';

export default function Count() {
    const counter = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
 
  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View><Text style={{fontSize:100}}>{counter}</Text></View>
    <View style={{flex:1, justifyContent:'flex-start',gap:5}}>
    <Button
    title='ADD'
    onPress={()=>{
        dispatch(increment())
    }}
    />
    <Button
    title='SUBSTRACT'
    onPress={()=>{
        dispatch(decrement())
    }}
    />
    <Button
    title='RESET'
    onPress={()=>{
        dispatch(reset())
    }}
    />
    </View>
   </View>
   
  );
}


