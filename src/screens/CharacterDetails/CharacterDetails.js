import { CachedImage, CharactersItem } from '@/components';
import { DATE_TIME_FORMAT } from '@/constants';
import { strings } from '@/localization';
import { goBack } from '@/navigation/NavigationRef';
import CharacterActions from '@/reducers/CharacterReducer';
import { ms, theme } from '@/theme';
import { convertDate, isNull } from '@/utils/helper';
import produce from 'immer';
import PropTypes from 'prop-types';
import React from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './CharacterDetails.styles';
import useCharacterDetails from './hooks/useCharacterDetails';

const HeaderView = ({ character, allCharacters, dispatch }) => {
  return (
    <View style={styles.headerContainer}>
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.header}>
        <Pressable
          accessibilityRole="button"
          style={styles.buttonBack}
          onPress={goBack}>
          <Icon name="arrow-left" size={ms(22)} color={theme.colors.white} />
        </Pressable>
        <Pressable
          accessibilityRole="button"
          style={styles.buttonHeart}
          onPress={() =>
            handleFavoriteAction(character, allCharacters, dispatch)
          }>
          <MaterialIcon
            name={character?.isFavorite ? 'favorite' : 'favorite-border'}
            size={ms(22)}
            color={
              character?.isFavorite ? theme.colors.green : theme.colors.gray
            }
          />
        </Pressable>
      </View>
    </View>
  );
};

const handleFavoriteAction = (character, allCharacters, dispatch) => {
  const newList = produce(allCharacters, (draft) => {
    const index = draft.findIndex(
      (itemD) => itemD.char_id === character.char_id,
    );

    if (index > -1) {
      draft[index].isFavorite = !draft[index].isFavorite;
    }
  });

  dispatch(CharacterActions.charactersSuccess(newList));
};

const getOccupation = (occupations) => {
  const name = occupations?.map((item) => {
    return item + '\n';
  });

  return name;
};

const CharacterImageView = ({ img, name, nickname, status }) => {
  return (
    <ImageBackground source={{ uri: img }} style={styles.backgroundImage}>
      <CachedImage
        source={{ uri: img }}
        resizeMode={'cover'}
        style={styles.imageCharacter}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.nickname}>{nickname}</Text>
      <Text style={styles.status}>{status}</Text>
    </ImageBackground>
  );
};

const CharacterPortrayedView = ({ portrayed, birthday }) => {
  return (
    !isNull(portrayed) && (
      <View style={styles.viewHorizontal}>
        <View>
          <Text style={styles.titlePortrayed}>
            {strings.charactersDetails.portrayed}
          </Text>
          <Text style={styles.portrayedValue}>{portrayed}</Text>
        </View>
        <View style={styles.viewBirthday}>
          <Text style={styles.birthdayValue}>
            {convertDate(
              birthday,
              DATE_TIME_FORMAT.mmddyyyy,
              DATE_TIME_FORMAT.ddmmmyyyy,
            )}
          </Text>
          <Icon name="gift" size={ms(13)} color={theme.colors.white} />
        </View>
      </View>
    )
  );
};

const CharacterOccupationView = ({ occupation }) => {
  return (
    !isNull(occupation) && (
      <View style={styles.viewOccupation}>
        <Text style={styles.titlePortrayed}>
          {strings.charactersDetails.occupation}
        </Text>
        <Text style={styles.portrayedValue}>{getOccupation(occupation)}</Text>
      </View>
    )
  );
};

const CharacterAppearanceView = ({ appearance }) => {
  return (
    !isNull(appearance) && (
      <View style={styles.appearance}>
        <Text style={styles.titlePortrayed}>
          {strings.charactersDetails.appearedIn}
        </Text>
        <ScrollView
          horizontal
          style={styles.portrayedValue}
          showsHorizontalScrollIndicator={false}>
          {appearance?.map((item, index) => {
            return (
              <View style={styles.viewAppearance} key={index}>
                <Text style={styles.textAppearance}>
                  {strings.charactersDetails.season + ' ' + item}
                </Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    )
  );
};

const OtherCharacterView = ({ otherCharacters }) => {
  return (
    <View style={styles.viewOtherCharacters}>
      <Text style={styles.textOtherCharacter}>
        {strings.charactersDetails.otherCharacters}
      </Text>
      <ScrollView
        horizontal
        style={styles.portrayedValue}
        showsHorizontalScrollIndicator={false}>
        {otherCharacters?.map((item, index) => {
          return (
            <View style={styles.otherCharacter} key={index}>
              <CharactersItem
                hideFavorite
                key={index}
                row={item}
                index={index}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export function CharacterDetails() {
  const { getter, setter } = useCharacterDetails();
  const { character } = getter;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CharacterImageView {...character} />
        <View style={styles.bottomContainer}>
          <CharacterPortrayedView {...character} />
          <CharacterOccupationView {...character} />
          <CharacterAppearanceView {...character} />
          <OtherCharacterView {...getter} />
        </View>
      </ScrollView>
      <HeaderView {...getter} {...setter} />
    </View>
  );
}

HeaderView.propTypes = {
  allCharacters: PropTypes.array,
  character: PropTypes.object,
  dispatch: PropTypes.func,
};
OtherCharacterView.propTypes = {
  otherCharacters: PropTypes.array,
};
CharacterImageView.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  nickname: PropTypes.string,
  status: PropTypes.string,
};
CharacterPortrayedView.propTypes = {
  birthday: PropTypes.string,
  portrayed: PropTypes.string,
};
CharacterOccupationView.propTypes = {
  occupation: PropTypes.array,
};
CharacterAppearanceView.propTypes = {
  appearance: PropTypes.array,
};
