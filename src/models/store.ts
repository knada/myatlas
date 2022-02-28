import { configureStore } from '@reduxjs/toolkit';
import tempReducer from './temp/tempModel';

const store = configureStore({
    reducer: {
        temp: tempReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
