import CharacterActions, {
  CharacterSelectors,
} from '@/reducers/CharacterReducer';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useCharacterDetails = () => {
  const route = useRoute();
  const char_id = route?.params?.char_id ?? 0;
  const [character, setCharacter] = useState({});
  const otherCharacters = useSelector(CharacterSelectors.getOtherCharacters);
  const allCharacters = useSelector(CharacterSelectors.getCharacters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CharacterActions.getOtherCharactersRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [char_id]);

  useEffect(() => {
    if (allCharacters.length > 0) {
      const index = allCharacters.findIndex((item) => item.char_id === char_id);

      if (index > -1) {
        setCharacter(allCharacters[index]);
      }
    }
  }, [allCharacters, char_id]);

  const getter = { character, allCharacters, otherCharacters };
  const setter = { dispatch };

  return {
    getter,
    setter,
  };
};

export default useCharacterDetails;
