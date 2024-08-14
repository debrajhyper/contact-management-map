import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice";
import modalReducer from "./ModalSlice";

export const AppStore = configureStore({
    reducer: {
        contacts: contactsReducer,
        modal: modalReducer
    }
});