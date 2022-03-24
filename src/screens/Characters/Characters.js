import { CharactersList, CustomHeader } from '@/components';
import { strings } from '@/localization';
import React from 'react';
import { View } from 'react-native';
import styles from './Characters.styles';
import useCharacters from './hooks/useCharacters';

export function Characters() {
  const { getter } = useCharacters();
  const { characters } = getter;

  return (
    <View style={styles.container}>
      <CustomHeader title={strings.characters.title} />
      <CharactersList
        data={characters}
        emptyListMessage={strings.characters.noCharacterFound}
      />
    </View>
  );
}
