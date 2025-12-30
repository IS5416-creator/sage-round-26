import { FlatList, Text, View } from "react-native";
import { countrieslarge } from "./Data";

export default function FlatListScreeen (){
    return (
    <FlatList
    data={countrieslarge}
    keyExtractor={(c)=>c.code}
    renderItem={({item})=>(
        <View style={{padding:8, borderBottomWidth:1}}>
            <Text>{item.name}</Text>
            <Text>{item.code}</Text>
        </View>
    )}
    />
)
    
}