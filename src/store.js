import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './redux/auth/authSlice';
import  modalWindowSlicer from './redux/modalWindowSlicer';
import settingModalSlicer from './redux/setingModalSlicer';
import {monthReducer} from './redux/month/slice'
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
 import { rootReducer } from './redux/rootSlice';
import logoutModalSlicer from './redux/logoutModalSlicer';



const persistConfig = {
	key: 'user',
	storage,
	whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer);



export const store = configureStore({
	reducer: {
		root: rootReducer,
		auth: persistedReducer,
		modalWindow: modalWindowSlicer,
		settingModal: settingModalSlicer,
		logoutModal: logoutModalSlicer,
		month: monthReducer,
	},
	 middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
//   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);