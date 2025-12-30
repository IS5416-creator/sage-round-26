import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./Screeens/Homescreen";
import Detailsscreen from "./Screeens/Detailsscreen";
import ScrollViewExample from "./Screeens/ScrollViewExample"
import FlatListScreeen from "./Screeens/FlatListScreen";
import FetchDataFromApi from "./Screeens/FetchDataFromApi";


export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homescreen}/>
        <Stack.Screen name="Details" component={Detailsscreen}/>
        <Stack.Screen name="ScrollViewExample" component={ScrollViewExample}/>
        <Stack.Screen name="FlatList" component={FlatListScreeen}/>
        <Stack.Screen name="Fetch Data From Api" component={FetchDataFromApi}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}