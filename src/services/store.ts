import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import modalReducer from "./ModalSlice";

// Creating the AppStore using the configureStore function from Redux Toolkit
// The configureStore function takes an object as an argument which contains the reducers for different parts of the state
export const AppStore = configureStore({
    reducer: {
        // The contacts key in the reducer object is mapped to the contactsReducer which handles the state related to contacts
        contacts: contactsReducer,
        // The modal key in the reducer object is mapped to the modalReducer which handles the state related to the modal
        modal: modalReducer
    }
});
