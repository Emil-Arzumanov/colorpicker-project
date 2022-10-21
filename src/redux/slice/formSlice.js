import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import initialState from "../initalState";
import axios from "axios";

export const postDataFromForm = createAsyncThunk(
    "postData/form",
    async ({name, surname, patronymic, mainImage}, thunkAPI) => {
        try {
            const formData = new FormData();
            formData.set("action", "send_data");
            formData.set("image", mainImage);
            formData.set('contact[name]', name);
            formData.set('contact[surname]', surname);
            formData.set('contact[patronymic]', patronymic);
            formData.set('id', 1);

            const response = await axios({
                method: "post",
                url: "https://test-job.pixli.app/send.php",
                data: formData
            });
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            return message;
        }
    }
);

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateNameInput:(state, action) => {
            state.nameInput = action.payload;
        },
        updateSurnameInput:(state, action) => {
            state.surnameInput = action.payload;
        },
        updatePatronymicInput:(state, action) => {
            state.patronymicInput = action.payload;
        },
        addMainImageToState:(state, action) => {
            state.mainImg = action.payload;
            state.mainImgURL = URL.createObjectURL(action.payload);
        },
        deleteImageFromState:(state) => {
            state.mainImg = null;
            state.mainImgURL = null;
        },
    },
    extraReducers: {
        [postDataFromForm.fulfilled]: (state, action) => {
            state.responseInput = action.payload.status;
        },
        [postDataFromForm.rejected]: (state, action) => {
            state.responseInput = action.payload;
            alert("ERROR!!!");
        },
    },
})

export const {
    addMainImageToState,
    deleteImageFromState,
    updateNameInput,
    updateSurnameInput,
    updatePatronymicInput
} = formSlice.actions
export default formSlice.reducer