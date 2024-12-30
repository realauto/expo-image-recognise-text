import * as React from 'react';

import { ExpoImageRecogniseTextViewProps } from './ExpoImageRecogniseText.types';

export default function ExpoImageRecogniseTextView(props: ExpoImageRecogniseTextViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
