import { loadingViewRef } from '@/components/LoadingView/LoadingView';
import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  charactersRequest: [''],
  charactersSuccess: ['data'],
  charactersFailure: ['error'],
  searchCharactersRequest: ['search'],
  searchCharactersSuccess: ['data'],
  searchCharactersFailure: ['error'],
  getOtherCharactersRequest: [''],
  getOtherCharactersSuccess: ['data'],
  getOtherCharactersFailure: ['error'],
  clearSearchData: [''],
});

export const CharacterTypes = Types;

const CharacterActions = Creators;

export default CharacterActions;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  characters: [],
  fetching: null,
  error: null,
  searchCharacters: [],
  otherCharacters: [],
});

/* ------------- Selectors ------------ */
export const CharacterSelectors = {
  getCharacters: (state) => state.characters.characters,
  getSearchCharacters: (state) => state.characters.searchCharacters,
  getOtherCharacters: (state) => state.characters.otherCharacters,
  fetching: (state) => state.characters.fetching,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = (state) => state.merge({ fetching: true, error: null });

export const getCharactersSuccess = (state, action) => {
  const { data } = action;

  loadingViewRef?.current?.hide();

  return state.merge({
    fetching: false,
    error: null,
    characters: data,
  });
};

export const searchCharactersSuccess = (state, action) => {
  const { data } = action;

  loadingViewRef?.current?.hide();

  return state.merge({
    fetching: false,
    error: null,
    searchCharacters: data,
  });
};

export const otherCharactersSuccess = (state, action) => {
  const { data } = action;

  loadingViewRef?.current?.hide();

  return state.merge({
    fetching: false,
    error: null,
    otherCharacters: data,
  });
};

export const failure = (state, action) => {
  const { error } = action;

  return state.merge({ fetching: false, error });
};

const clearSearchData = (state) => {
  return state.merge({
    searchCharacters: [],
  });
};

/* ------------- Hookup Reducers To Types ------------- */
export const charactersReducer = createReducer(INITIAL_STATE, {
  [Types.CHARACTERS_REQUEST]: request,
  [Types.CHARACTERS_SUCCESS]: getCharactersSuccess,
  [Types.CHARACTERS_FAILURE]: failure,
  [Types.SEARCH_CHARACTERS_REQUEST]: request,
  [Types.SEARCH_CHARACTERS_SUCCESS]: searchCharactersSuccess,
  [Types.SEARCH_CHARACTERS_FAILURE]: failure,
  [Types.CLEAR_SEARCH_DATA]: clearSearchData,
  [Types.GET_OTHER_CHARACTERS_REQUEST]: request,
  [Types.GET_OTHER_CHARACTERS_SUCCESS]: otherCharactersSuccess,
  [Types.GET_OTHER_CHARACTERS_FAILURE]: failure,
});
