import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ScrollSchema } from '../types/scroll';

const initialState: ScrollSchema = {
    scroll: {},
};

export const PageScrollSlice = createSlice({
    name: 'PageScrollSlice',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{path: string, position: number}>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: PageScrollActions, reducer: PageScrollReducer } = PageScrollSlice;
