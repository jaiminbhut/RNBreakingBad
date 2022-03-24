import styles from '@/components/LoadingView/LoadingView.styles';
import React, { createRef, useImperativeHandle, useState } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';

export const loadingViewRef = createRef();

export function LoadingView() {
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(
    loadingViewRef,
    () => ({
      show: () => setIsVisible(true),
      hide: () => setIsVisible(false),
    }),
    [],
  );

  return (
    <Modal
      transparent
      animated
      visible={isVisible}
      onRequestClose={() => setIsVisible(false)}>
      <View style={[styles.container]}>
        <ActivityIndicator size={'large'} />
      </View>
    </Modal>
  );
}
