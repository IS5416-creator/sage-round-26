import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./Screeens/Homescreen";
import Detailsscreen from "./Screeens/Detailsscreen";


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen}/>
        <Stack.Screen name="Details" component={Detailsscreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}