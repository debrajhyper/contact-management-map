import { ModalState } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { EMPTY_STR, MODAL_SLICE_NAME } from "@Constants";

const initialState: ModalState = {
    isOpen: false,
    type: EMPTY_STR
}

export const modalSlice = createSlice({
    name: MODAL_SLICE_NAME,
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true
            state.type = action.payload
        },
        closeModal: (state) => {
            state.isOpen = false
            state.type = EMPTY_STR
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;