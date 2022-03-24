import { ms, theme } from '@/theme';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Feather';
import styles from './CachedImage.styles';

export function CachedImage({
  placeholder,
  source,
  style,
  resizeMode,
  tintColor,
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <View>
      <FastImage
        tintColor={tintColor ?? undefined}
        style={[style]}
        source={source}
        resizeMode={resizeMode}
        onLoadStart={() => {
          setLoaded(false);
          setError(false);
        }}
        onLoadEnd={() => setLoaded(true)}
        onError={() => setError(true)}>
        {(!loaded || error) && (
          <View style={styles.placeHolderView}>
            <Icon name="user" size={ms(40)} color={theme.colors.white} />
          </View>
        )}
      </FastImage>
    </View>
  );
}

CachedImage.propTypes = {
  placeholder: PropTypes.number,
  resizeMode: PropTypes.string,
  source: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  tintColor: PropTypes.string,
};

CachedImage.defaultProps = {
  resizeMode: FastImage.resizeMode.contain,
};
