import { loadingViewRef } from '@/components/LoadingView/LoadingView';
import { apiCall, handleErrorResponse } from '@/networking';
import Apis from '@/networking/apis/index';
import CharacterActions, {
  CharacterSelectors,
  CharacterTypes,
} from '@/reducers/CharacterReducer';
import { isNull } from '@/utils/helper';
import produce from 'immer';
import { call, debounce, put, select, takeLatest } from 'redux-saga/effects';

const charactersApi = Apis.characters();

function* charactersRequestSuccess(response) {
  const characters = yield select(CharacterSelectors.getCharacters);

  if (!isNull(characters)) {
    const favoriteList = produce(characters, (draft) => {
      return draft.filter((item) => item.isFavorite);
    });

    const newList = produce(response?.data, (draft) => {
      favoriteList.forEach((element) => {
        const index = draft.findIndex(
          (itemD) => itemD.char_id === element.char_id,
        );

        if (index > -1) {
          draft[index].isFavorite = !draft[index].isFavorite;
        }
      });
    });

    yield put(CharacterActions.charactersSuccess(newList));
  } else {
    yield put(CharacterActions.charactersSuccess(response.data));
  }
}

function* charactersRequest(api, { payload }) {
  loadingViewRef.current.show();

  const response = yield call(api.getCharacters, payload);

  if (response?.status === 200 || response?.status === 201) {
    yield call(charactersRequestSuccess, response);
  } else {
    yield call(
      handleErrorResponse,
      response,
      CharacterActions.charactersFailure,
    );
  }
}

function* searchCharactersSuccess(response) {
  const characters = yield select(CharacterSelectors.getCharacters);

  if (!isNull(characters)) {
    const favoriteList = produce(characters, (draft) => {
      return draft.filter((item) => item.isFavorite);
    });

    const newList = produce(response?.data, (draft) => {
      favoriteList.forEach((element) => {
        const index = draft.findIndex(
          (itemD) => itemD.char_id === element.char_id,
        );

        if (index > -1) {
          draft[index].isFavorite = !draft[index].isFavorite;
        }
      });
    });

    yield put(CharacterActions.searchCharactersSuccess(newList));
  } else {
    yield put(CharacterActions.searchCharactersSuccess(response.data));
  }
}

function* searchCharacterRequest(api, { search }) {
  const response = yield call(api.searchCharacters, search);

  if (response?.status === 200 || response?.status === 201) {
    yield call(searchCharactersSuccess, response);
  } else {
    yield call(
      handleErrorResponse,
      response,
      CharacterActions.searchCharactersFailure,
    );
  }
}

function* getOtherCharactersRequest(api, { payload }) {
  loadingViewRef.current.show();

  yield call(
    apiCall,
    api.getOtherCharacters,
    payload,
    CharacterActions.getOtherCharactersSuccess,
    CharacterActions.getOtherCharactersFailure,
  );
}

export default [
  takeLatest(
    CharacterTypes.CHARACTERS_REQUEST,
    charactersRequest,
    charactersApi,
  ),
  takeLatest(
    CharacterTypes.GET_OTHER_CHARACTERS_REQUEST,
    getOtherCharactersRequest,
    charactersApi,
  ),
  debounce(
    250,
    CharacterTypes.SEARCH_CHARACTERS_REQUEST,
    searchCharacterRequest,
    charactersApi,
  ),
];
