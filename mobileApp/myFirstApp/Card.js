import {View, Text, Image} from 'react-native'

export default function Card (){
    return <View >
        <Image 
        source={require("./cake.jpg"
        )}
        style={{width:200,height:200}}
        />
        <Text style={{fontSize:20,margin:5}}>Buy ME</Text>
    </View>
}