import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import formSlice from "./slice/formSlice";
import colorPickSlice from "./slice/colorPickSlice";

const reducers = combineReducers({
    formSlice: formSlice,
    colorPickSlice: colorPickSlice,
})

const store = configureStore({
    reducer: reducers,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(
            {serializableCheck: false,}
        ),
})

export default store;