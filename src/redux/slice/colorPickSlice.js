import {createSlice} from "@reduxjs/toolkit";
import initialState from "../initalState";

const colorPickSlice = createSlice({
    name: 'colorPick',
    initialState,
    reducers: {
        addNewColor:(state, action) => {
            state.colors.push(action.payload);
            state.isInstrumentVisible = !state.isInstrumentVisible;
            state.currentColorId = state.colors.length-1;
        },
        deleteColor:(state, action) => {
            for (let i=0;i < state.colors.length;i++) {
                if (action.payload === i) {
                    state.colors.splice(i,1);
                }
            }
        },
        toggleInstrumentVisibility:(state) => {
            state.isInstrumentVisible = !state.isInstrumentVisible;
        },
        updateCurrentColor: (state, action) => {
            state.colors[state.currentColorId] = action.payload;
        },
        updateCurrentColorId: (state,action) => {
            state.currentColorId = action.payload;
            state.isInstrumentVisible = !state.isInstrumentVisible;
        },
    }
})

export const {
    addNewColor,
    deleteColor,
    toggleInstrumentVisibility,
    updateCurrentColor,
    updateCurrentColorId,
} = colorPickSlice.actions
export default colorPickSlice.reducer