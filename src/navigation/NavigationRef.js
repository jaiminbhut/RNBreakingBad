import { createRef } from 'react';

export const navigationRef = createRef();

export const currentScreen = createRef();

export function navigate(...props) {
  navigationRef.current?.navigate(...props);
}

export function reset(name) {
  navigationRef.current?.reset({
    routes: [
      {
        name: name,
      },
    ],
  });
}

export function replace(...props) {
  navigationRef.current?.replace(...props);
}

export function goBack() {
  navigationRef.current?.canGoBack() && navigationRef.current?.goBack();
}
