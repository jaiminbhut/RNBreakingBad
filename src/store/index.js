import { rootReducer } from '@/reducers';
import rootSaga from '@/saga';
import { storage } from '@/storage';
import immutablePersistenceTransform from '@/utils/immutablePersistenceTransform';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

const sagaMonitor = null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middleWare = [sagaMiddleware];

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['nav', 'navigation'],
  transforms: [immutablePersistenceTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(...middleWare);

const enhancers = __DEV__ ? composeEnhancers(middleware) : compose(middleware);

const store = createStore(persistedReducer, enhancers);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
