import { ContactsState } from "./types";
import { CONTACTS_SLICE_NAME } from "@Constants";
import { createSlice, nanoid } from "@reduxjs/toolkit";

// Define the initial state of the contacts slice
const initialState: ContactsState = {
    contacts: [], // Initially there are no contacts
}

// Create the contacts slice using Redux Toolkit
export const contactsSlice = createSlice({
    name: CONTACTS_SLICE_NAME, // Name of the slice
    initialState, // Initial state of the slice
    reducers: {
        // Add a new contact to the contacts list
        addContact: (state, action) => {
            const { firstName, lastName, status } = action.payload; // Destructure the payload
            state.contacts = [...state.contacts, { id: nanoid(), firstName, lastName, status }]; // Add a new contact to the list
        },
        // Delete a contact from the contacts list
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter((contact) => contact.id !== action.payload); // Filter out the contact with the matching ID
        },
        // Update an existing contact in the contacts list
        updateContact: (state, action) => {
            const { id, firstName, lastName, status } = action.payload; // Destructure the payload
            const existingContact = state.contacts.find((contact) => contact.id === id); // Find the contact with the matching ID
            if (existingContact) { // If the contact exists
                existingContact.firstName = firstName; // Update the first name
                existingContact.lastName = lastName; // Update the last name
                existingContact.status = status; // Update the status
            }
        },
    }
});

// Export the actions and the reducer from the slice
export const { addContact, deleteContact, updateContact } = contactsSlice.actions;
export default contactsSlice.reducer;