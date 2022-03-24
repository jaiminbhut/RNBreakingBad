import { CharacterSelectors } from '@/reducers/CharacterReducer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useCharacters = () => {
  const characters = useSelector(CharacterSelectors.getCharacters);
  const [favorites, setFavorite] = useState();

  useEffect(() => {
    const allChar = characters.filter((item) => item.isFavorite);

    setFavorite([...allChar]);
  }, [characters]);

  const getter = { characters, favorites };
  const setter = {};

  return {
    getter,
    setter,
  };
};

export default useCharacters;
