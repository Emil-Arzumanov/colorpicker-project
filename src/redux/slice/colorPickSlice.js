import {createSlice} from "@reduxjs/toolkit";
import initialState from "../initalState";

const colorPickSlice = createSlice({
    name: 'colorPick',
    initialState,
    reducers: {
        addNewColor:(state, action) => {
            state.colors.push(action.payload);
        },
        deleteColor:(state, action) => {
            console.log(action.payload);
            for (let i=0;i < state.colors.length;i++) {
                if (action.payload === i) {
                    state.colors.splice(i,1);
                }
            }
        },
    }
})

export const {
    addNewColor,
    deleteColor,
} = colorPickSlice.actions
export default colorPickSlice.reducer