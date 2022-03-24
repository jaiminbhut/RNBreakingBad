import { CharactersList } from '@/components';
import { strings } from '@/localization';
import { goBack } from '@/navigation/NavigationRef';
import { ms, theme } from '@/theme';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Keyboard,
  Pressable,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import useSearch from './hooks/useSearch';
import styles from './Search.styles';

const SearchInput = ({ search, setSearch }) => {
  return (
    <View>
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.searchInputContainer}>
        <TextInput
          blurOnSubmit
          accessibilityLabel={strings.search.title}
          accessibilityHint={strings.search.title}
          placeholder={strings.search.title}
          placeholderTextColor={theme.colors.placeholder}
          value={search}
          numberOfLines={1}
          style={styles.searchInput}
          returnKeyType={'done'}
          onSubmitEditing={() => Keyboard.dismiss()}
          onChangeText={(text) => setSearch(text)}
        />
        <Pressable
          accessibilityRole="button"
          style={styles.cancelContainer}
          onPress={goBack}>
          <Icon name="x" size={ms(20)} color={theme.colors.white} />
        </Pressable>
      </View>
    </View>
  );
};

export function Search() {
  const { getter, setter } = useSearch();

  return (
    <View style={styles.container}>
      <SearchInput {...getter} {...setter} />
      <CharactersList
        isSearch
        emptyListDescription={strings.search.tryAgain}
        emptyListMessage={strings.search.noCharacterFound}
      />
    </View>
  );
}

SearchInput.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
