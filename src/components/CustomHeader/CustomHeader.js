import { NAVIGATION } from '@/constants';
import { goBack, navigate } from '@/navigation/NavigationRef';
import { ms, theme } from '@/theme';
import PropTypes from 'prop-types';
import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './CustomHeader.styles';

const SearchLikeView = () => {
  return (
    <View style={styles.searchLikeContainer}>
      <Pressable
        accessibilityRole="button"
        style={styles.buttonSearch}
        onPress={handleSearchAction}>
        <Icon name="search" size={ms(20)} color={theme.colors.white} />
      </Pressable>
      <Pressable
        accessibilityRole="button"
        style={styles.buttonHeart}
        onPress={handleFavoriteAction}>
        <MaterialIcon
          name="favorite"
          size={ms(22)}
          color={theme.colors.green}
        />
      </Pressable>
    </View>
  );
};

const handleSearchAction = () => {
  navigate(NAVIGATION.search);
};

const handleFavoriteAction = () => {
  navigate(NAVIGATION.favorites);
};

const CancelView = () => {
  return (
    <Pressable
      accessibilityRole="button"
      style={styles.cancelContainer}
      onPress={handleCancelAction}>
      <Icon name="x" size={ms(20)} color={theme.colors.white} />
    </Pressable>
  );
};

const handleCancelAction = () => {
  goBack();
};

export function CustomHeader({ title, customTitleStyle, showClose }) {
  return (
    <View>
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.container}>
        <Text style={[styles.textTitle, customTitleStyle]}>{title}</Text>
        {showClose ? <CancelView /> : <SearchLikeView />}
      </View>
    </View>
  );
}

CustomHeader.propTypes = {
  title: PropTypes.string.isRequired,
  customTitleStyle: PropTypes.object,
  showClose: PropTypes.bool,
};
