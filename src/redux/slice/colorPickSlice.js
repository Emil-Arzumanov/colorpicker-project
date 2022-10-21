import {createSlice} from "@reduxjs/toolkit";
import initialState from "../initalState";

const colorPickSlice = createSlice({
    name: 'colorPick',
    initialState,
    reducers: {
        updateCurrentColor:(state, action) => {
            state.mainImg = action.payload;
        },
    }
})

export const {
    updateCurrentColor,
} = colorPickSlice.actions
export default colorPickSlice.reducer