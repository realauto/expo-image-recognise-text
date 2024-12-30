import { registerWebModule, NativeModule } from 'expo';

import { ExpoImageRecogniseTextModuleEvents } from './ExpoImageRecogniseText.types';

class ExpoImageRecogniseTextModule extends NativeModule<ExpoImageRecogniseTextModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(ExpoImageRecogniseTextModule);
