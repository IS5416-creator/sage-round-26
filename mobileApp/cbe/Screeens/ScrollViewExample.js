import { ScrollView, Text, View } from "react-native";
import {countries} from "./Data"



export default function ScrollViewExample(){
    return <ScrollView>
        {
            countries.map((c)=>(
                <View style={{padding:8, borderBottomWidth:1}}>
                    <Text>{c.name}</Text>
                    <Text>{c.code}</Text>
                </View>
            ))
        }
    </ScrollView>
}