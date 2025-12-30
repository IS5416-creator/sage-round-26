import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function FetchDataFromApi() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(() => setError(true));
  }, []);

  
  if (!data && !error) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  
  if (error) {
    return (
      <View>
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
}
