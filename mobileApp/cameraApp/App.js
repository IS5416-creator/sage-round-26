import { useEffect, useRef, useState } from "react";
import { Button, Image, View, Text } from "react-native";
import { CameraView, Camera } from "expo-camera";

export default function App() {
  const [hasPermission, setHasPermission] = useState();
  const [photo, setPhoto] = useState();
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  async function takePhoto() {
    if (cameraRef.current) {
      const data = await cameraRef.current.takePictureAsync();
      setPhoto(data.uri);
    }
  }

  if (hasPermission === null) {
    return (
      <View >
        <Text>Asking for camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View >
        <Text>No access to camera</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        facing="front"
      />

      {photo && (
        <Image
          source={{ uri: photo }}
          style={{ width: 100, height: 100, margin: 10 }}
        />
      )}

      <Button title="Take picture" onPress={takePhoto} />
    </View>
  );
}

