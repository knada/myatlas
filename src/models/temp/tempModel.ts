import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

type tempState = {
    data: string;
};

const initialState = {
    data: 'Redux is working',
} as tempState;

const tempSlice = createSlice({
    name: 'temp',
    initialState,
    reducers: {
        update: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { update } = tempSlice.actions;

export const selectData = (state: RootState): string => state.temp.data;

export default tempSlice.reducer;
