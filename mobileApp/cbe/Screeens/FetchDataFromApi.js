import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function FetchDataFromApi() {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(() => setError(true));
  }, []);

  
  if (!data && !error) {
    return (
      <View style={{flex:1,justifyContent:"center",alignContent:"center", size:"large"}}>
        <ActivityIndicator />
      </View>
    );
  }
  // if (!data && !error) --> if there is no data and there is no error

  
  if (error) {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>ERROR</Text>
      </View>
    );
  }


  return (
    <FlatList
      data={data}
      keyExtractor={(post) => post.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>post id: {item.id}</Text>
          <Text>post title: {item.title}</Text>
          <Text>{item.body}</Text>
        </View>
      )}
    />
  );
  // in other way
  // if (data == undefined){
  // return <View>
  // {error? <Text>Error</Text>:<ActivityIndicator />}
  // </View> 
  //  }else{
    // <FlatList/>}
  // }
}
