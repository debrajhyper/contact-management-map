import { ContactsState } from "./types";
import { CONTACTS_SLICE_NAME } from "@Constants";
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState: ContactsState = {
    contacts: [],
}

export const contactsSlice = createSlice({
    name: CONTACTS_SLICE_NAME,
    initialState,
    reducers: {
        addContact: (state, action) => {
            const { firstName, lastName, status } = action.payload;
            state.contacts = [...state.contacts, { id: nanoid(), firstName, lastName, status }];
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload)
        },
        updateContact: (state, action) => {
            const { id, firstName, lastName, status } = action.payload;
            const existingContact = state.contacts.find((contact) => contact.id === id);
            if (existingContact) {
                existingContact.firstName = firstName;
                existingContact.lastName = lastName;
                existingContact.status = status;
            }
            state.contacts = [...state.contacts];
        },
    }
});

export const { addContact, deleteContact, updateContact } = contactsSlice.actions;
export default contactsSlice.reducer;