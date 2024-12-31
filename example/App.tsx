import { useEvent } from 'expo';
import ExpoImageRecogniseText from 'expo-image-recognise-text';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function App() {
  const onChangePayload = useEvent(ExpoImageRecogniseText, 'onChange');

  const handleRecogniseImage = async () =>{
      const base64data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAyCAIAAAAlV+npAAAA0klEQVR4nO3ZwQrDIBAAUbf0/395exCCaKGdS3YD806SHJJM1IuRmUP/eVW/wJMYCzAWYCzAWICxAGMBxgKMBRgLMBZgLMBYgLEAYwHGAowFGAswFmAswFjAu/DZETHGmMdLc7w5b9WeRVXG2mTmmm/6GfROUfuvtllzTqI+02qU71nX968hMnO9fo3LZ1bTDT4iZppzYRZqtAxPXxdmoeJYz9J0GfZkLMBYgLEAYwHGAowFGAswFmAswFiAsQBjAcYCjAUYCzAWYCzAWICxAGMBH/kWQlBJ3f/NAAAAAElFTkSuQmCC"
      const data  = await ExpoImageRecogniseText.recognizeTextFromBase64Async(base64data);
      console.log("handleRecogniseImage", data);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Module API Example</Text>
        <Group name="Constants">
          <Text>{ExpoImageRecogniseText.PI}</Text>
        </Group>
        <Group name="Functions">
          <Text>{ExpoImageRecogniseText.hello()}</Text>
        </Group>
        <Group name="Async functions">
          <Button
            title="Set value"
            onPress={async () => {
              await ExpoImageRecogniseText.setValueAsync('Hello from JS!');
            }}
          />
        </Group>
        <Group name="Recognize Text From Base64 Async">
          <Button
            title="Recognise"
            onPress={handleRecogniseImage}
          />
        </Group>
        <Group name="Events">
          <Text>{onChangePayload?.value}</Text>
        </Group>
   
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  view: {
    flex: 1,
    height: 200,
  },
};
