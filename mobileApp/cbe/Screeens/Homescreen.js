import { Button, Text, View } from "react-native";


export default function Homescreen({navigation}){
    return <View>
        <Text>Home page</Text>
        <Button 
        title="Details" 
        onPress={()=>navigation.navigate("Details")}
        />
        <Button 
        title="ScrollView" 
        onPress={()=>navigation.navigate("ScrollViewExample")}

        />
    </View>
    
}
