import { strings } from '@/localization';
import { isNull } from '@/utils/helper';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './EmptyListView.styles';

export function EmptyListView({ message, isLoading, description }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textMessage}>
        {isLoading ? strings.common.loading : message}
      </Text>
      {!isNull(description) && !isLoading && (
        <Text style={styles.textDescription}>{description}</Text>
      )}
    </View>
  );
}

EmptyListView.propTypes = {
  message: PropTypes.string.isRequired,
  description: PropTypes.string,
  isLoading: PropTypes.bool,
};
EmptyListView.defaultProps = {
  isLoading: true,
  message: strings.characters.noCharacterFound,
  description: '',
};
