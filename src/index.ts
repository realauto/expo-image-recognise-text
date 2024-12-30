// Reexport the native module. On web, it will be resolved to ExpoImageRecogniseTextModule.web.ts
// and on native platforms to ExpoImageRecogniseTextModule.ts
export { default } from './ExpoImageRecogniseTextModule';
export { default as ExpoImageRecogniseTextView } from './ExpoImageRecogniseTextView';
export * from  './ExpoImageRecogniseText.types';
