import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import newsReducer from './news/newsSlice';
// import weatherDetailsReducer from "./weatherDetails/weatDetSlice";

const WeatherPersistConfig = {
  key: 'news',
  storage,
  blacklist: ["pending"]
};

// const WeatherDetailsPersistConfig = {
//   key: 'weatherDetails',
//   storage,
//   blacklist: ["pending"]
// };

const NewsPersistedReducer = persistReducer(WeatherPersistConfig, newsReducer);
// const WeatherDetailsPersistedReducer = persistReducer(WeatherDetailsPersistConfig, weatherDetailsReducer);

const rootReducer = combineReducers({ 
    news: NewsPersistedReducer,
    // weatherDetails: WeatherDetailsPersistedReducer
})


const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});
export const persistor = persistStore(store);

export default store;

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;