import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.value += 1; },
        decrement: (state) => { state.value -= 1; },
        incrementByAmount: (state, action: PayloadAction<number>) => { state.value += action.payload },
    },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const selectCount = (state: any) => state.counter.value

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;