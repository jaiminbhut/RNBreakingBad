import { strings } from '@/localization';
import CharacterActions from '@/reducers/CharacterReducer';
import { isNull } from '@/utils/helper';
import produce from 'immer';
import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, View } from 'react-native';
import { CharactersItem } from '../CharactersItem/CharactersItem';
import { EmptyListView } from '../EmptyListView/EmptyListView';
import styles from './CharactersList.styles';
import useCharactersList from './hooks/useCharactersList';

const getNewList = (list, item) => {
  const newList = produce(list, (draft) => {
    const index = draft.findIndex((itemD) => itemD.char_id === item.char_id);

    if (index > -1) {
      draft[index].isFavorite = !draft[index].isFavorite;
    }
  });

  return newList;
};

const handleFavoriteAction = (
  item,
  dispatch,
  characters,
  searchedCharacter,
  isSearch,
) => {
  const newList = getNewList(characters, item);

  dispatch(CharacterActions.charactersSuccess(newList));

  if (isSearch) {
    if (!isNull(searchedCharacter)) {
      const newSearchList = getNewList(searchedCharacter, item);

      dispatch(CharacterActions.searchCharactersSuccess(newSearchList));
    }
  }
};

export function CharactersList({
  data,
  isSearch,
  emptyListMessage,
  emptyListDescription,
}) {
  const { getter, setter } = useCharactersList();
  const { characters, searchedCharacter, isLoading } = getter;
  const { dispatch } = setter;

  return (
    <View style={styles.charactersList}>
      <FlatList
        data={isSearch ? searchedCharacter : data}
        bounces={false}
        numColumns={2}
        keyExtractor={(item, index) => `character-list${item.name}${index}`}
        ListEmptyComponent={() => (
          <EmptyListView
            isLoading={isLoading}
            message={emptyListMessage}
            description={emptyListDescription}
          />
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, i }) => {
          return (
            <CharactersItem
              row={item}
              index={i}
              onFavoriteAction={() =>
                handleFavoriteAction(
                  item,
                  dispatch,
                  characters,
                  searchedCharacter,
                  isSearch,
                )
              }
            />
          );
        }}
      />
    </View>
  );
}

CharactersList.propTypes = {
  data: PropTypes.array,
  searchedCharacter: PropTypes.array,
  emptyListMessage: PropTypes.string,
  emptyListDescription: PropTypes.string,
  isSearch: PropTypes.bool,
};
CharactersList.defaultProps = {
  data: [],
  searchedCharacter: [],
  emptyListMessage: strings.characters.noCharacterFound,
  isSearch: false,
  emptyListDescription: '',
};
