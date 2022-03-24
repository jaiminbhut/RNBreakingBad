import { CharactersList, CustomHeader } from '@/components';
import { strings } from '@/localization';
import React from 'react';
import { View } from 'react-native';
import styles from './Favorites.styles';
import useFavorites from './hooks/useFavorites';

export function Favorites() {
  const { getter } = useFavorites();
  const { favorites } = getter;

  return (
    <View style={styles.container}>
      <CustomHeader
        showClose
        title={strings.favorites.title}
        customTitleStyle={styles.textTitle}
      />
      <CharactersList
        data={favorites}
        emptyListMessage={strings.favorites.noFavoritesFound}
      />
    </View>
  );
}
