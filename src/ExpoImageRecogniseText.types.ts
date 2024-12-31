import type { StyleProp, ViewStyle } from 'react-native';


export type ExpoImageRecogniseTextModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
};

export type ChangeEventPayload = {
  value: string;
};
