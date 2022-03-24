import { CharacterSelectors } from '@/reducers/CharacterReducer';
import { useDispatch, useSelector } from 'react-redux';

const useCharactersList = () => {
  const dispatch = useDispatch();
  const characters = useSelector(CharacterSelectors.getCharacters);
  const isLoading = useSelector(CharacterSelectors.fetching);
  const searchedCharacter = useSelector(CharacterSelectors.getSearchCharacters);

  const getter = { characters, searchedCharacter, isLoading };

  const setter = { dispatch };

  return {
    getter,
    setter,
  };
};

export default useCharactersList;
