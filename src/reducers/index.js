import { charactersReducer } from '@/reducers/CharacterReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({ characters: charactersReducer });
