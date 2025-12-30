import { Button, Text, View } from "react-native";


export default function Homescreen({navigation}){
    return <View style={{flex:1,flexDirection: "column",justifyContent:"flex-start", gap:20 }}>
        <Text>Home page</Text>
        <Button 
        title="Details" 
        onPress={()=>navigation.navigate("Details")}
        />
        <Button 
        title="ScrollView" 
        onPress={()=>navigation.navigate("ScrollViewExample")}

        />
        <Button 
        title="FlatList" 
        onPress={()=>navigation.navigate("FlatList")}

        />
        <Button 
        title="Fetch Data From Api" 
        onPress={()=>navigation.navigate("Fetch Data From Api")}

        />
    </View>
    
}
