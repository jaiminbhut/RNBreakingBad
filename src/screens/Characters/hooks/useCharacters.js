import CharacterActions, {
  CharacterSelectors,
} from '@/reducers/CharacterReducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useCharacters = () => {
  const characters = useSelector(CharacterSelectors.getCharacters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CharacterActions.charactersRequest());
  }, [dispatch]);

  const getter = { characters };
  const setter = { dispatch };

  return {
    getter,
    setter,
  };
};

export default useCharacters;
