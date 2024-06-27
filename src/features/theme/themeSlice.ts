import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
    value: 'light' | 'dark'
}

const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';

const initialState: ThemeState = {
    value: defaultTheme
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        switchTheme: (state) => {
            state.value = state.value == 'light' ? 'dark' : 'light';
        },
        setTheme: (state, action: PayloadAction<string>) => {
            if (action.payload == 'light' || action.payload == 'dark') {
                state.value = action.payload;
            }
        }
    },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectTheme = (state: any) => state.theme.value

export const { switchTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;