import CharactersSaga from '@/saga/Characters';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([...CharactersSaga]);
}
