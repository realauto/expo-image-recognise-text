import { NativeModule, requireNativeModule } from 'expo';

import { ExpoImageRecogniseTextModuleEvents } from './ExpoImageRecogniseText.types';

declare class ExpoImageRecogniseTextModule extends NativeModule<ExpoImageRecogniseTextModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
  recognizeTextFromBase64Async(base64: string): Promise<string>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<ExpoImageRecogniseTextModule>('ExpoImageRecogniseText');
