import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value += 1
        },
        decrement(state) {
            state.value -= 1
        },
        incrementByAmount(state, action) {
            console.log(action);
            state.value += Number(action.payload) || 0;
        },
    }
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
