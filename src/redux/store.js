import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { tweetsFollows } from './tweetsSlice';

const persistConfig = {
  key: 'tweets',
  storage,
  whitelist: ['tweets'],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, tweetsFollows),
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
