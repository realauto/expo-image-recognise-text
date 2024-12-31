# expo-image-recognise-text

A React Native library for performing text recognition (OCR) on Base64-encoded images using the Vision framework. This library works seamlessly with Expo projects.

Objective

This library allows you to input Base64 image data and extract recognized text using iOS’s Vision framework.

Features
 Converts Base64 image data into recognizable text.
 Integration into managed Expo projects.
 Compatible with bare React Native projects.

Installation

## Add the package

```bash
npm install expo-image-recognise-text
```

```bash
npx pod-install
```

## Rebuild the project using Expo’s custom development client

```bash
expo prebuild
expo run:ios
expo run:android
```

## Important: Add Vision Framework to Your Xcode Project

### don’t forget to add the Vision framework to your Xcode project:
* Open your project in Xcode.
* Navigate to Your Project > Build Phases > Link Binary with Libraries.
* Add the Vision.framework.

## Usage

### Here’s how to use expo-image-recognise-text in your project:

#### Example

```javascript
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import ExpoImageRecogniseText from 'expo-image-recognise-text';

const App = () => {
  const [recognizedText, setRecognizedText] = useState<string | null>(null);

  const handleRecogniseImage = async () => {
    const base64Image = 'data:image/png;base64,...'; // Replace with your Base64 image data
    try {
      const result = await ExpoImageRecogniseText.recognizeTextFromBase64Async(base64Image);
      setRecognizedText(result);
    } catch (error) {
      console.error('Error recognizing text:', error);
    }
  };

  return (
    <View>
      <Button title="Recognize Text" onPress={handleRecogniseImage} />
      {recognizedText && <Text>Recognized Text: {recognizedText}</Text>}
    </View>
  );
};

export default App;
```

## API

ExpoImageRecogniseText.recognizeTextFromBase64Async(base64Image: string)
 Parameters:
   base64Image (string): The Base64-encoded image data. Must include the prefix, e.g., data:image/png;base64,....
 Returns:
   A promise that resolves to the recognized text as a string.

#### Example

```javascript
const text = await ExpoImageRecogniseText.recognizeTextFromBase64Async(base64Image);
console.log('Recognized Text:', text);
```

Contributing

Contributions are welcome! Please check the contributing guide for details.

Issues

If you encounter any issues, please file them here.

Repository

[GitHub repository](https://github.com/realauto/expo-image-recognise-text) repository.

License

This project is licensed under the MIT License. See the LICENSE file for details.