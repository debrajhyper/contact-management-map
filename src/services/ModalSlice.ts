import { ModalState } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { EMPTY_STR, MODAL_SLICE_NAME } from "@Constants";

// Define the initial state of the modal slice
const initialState: ModalState = {
    isOpen: false, // The modal is initially closed
    type: EMPTY_STR // The type of the modal is initially empty
}

// Create the modal slice using Redux Toolkit
export const modalSlice = createSlice({
    name: MODAL_SLICE_NAME, // Name of the slice
    initialState, // Initial state of the slice
    reducers: {
        // Reducer function to open the modal
        openModal: (state, action) => {
            state.isOpen = true; // Set the modal state to open
            state.type = action.payload; // Set the type of the modal to the payload from the action
        },
        // Reducer function to close the modal
        closeModal: (state) => {
            state.isOpen = false; // Set the modal state to closed
            state.type = EMPTY_STR; // Set the type of the modal to empty
        }
    }
});

// Export the action creators for opening and closing the modal
export const { openModal, closeModal } = modalSlice.actions;
// Export the reducer for the modal slice
export default modalSlice.reducer;