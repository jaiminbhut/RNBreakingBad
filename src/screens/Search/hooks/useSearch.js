import CharacterActions from '@/reducers/CharacterReducer';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const useSearch = () => {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(CharacterActions.clearSearchData());
    dispatch(CharacterActions.searchCharactersRequest(search));
  }, [dispatch, search]);

  const getter = { search };
  const setter = { dispatch, setSearch };

  return {
    getter,
    setter,
  };
};

export default useSearch;
