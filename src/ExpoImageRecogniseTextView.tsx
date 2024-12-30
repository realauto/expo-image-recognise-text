import { requireNativeView } from 'expo';
import * as React from 'react';

import { ExpoImageRecogniseTextViewProps } from './ExpoImageRecogniseText.types';

const NativeView: React.ComponentType<ExpoImageRecogniseTextViewProps> =
  requireNativeView('ExpoImageRecogniseText');

export default function ExpoImageRecogniseTextView(props: ExpoImageRecogniseTextViewProps) {
  return <NativeView {...props} />;
}
