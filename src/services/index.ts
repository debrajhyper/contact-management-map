/**
 * Export the AppStore, contactsSlice, and modal actions
 * from the respective slices.
 */
export { AppStore } from './store';
/**
 * Export the contactsSlice containing the contacts state
 * and the actions to manipulate the contacts state.
 */
export { contactsSlice } from './contactsSlice';
/**
 * Export the modal actions to open and close the modal
 * from the ModalSlice.
 */
export { openModal, closeModal } from './ModalSlice';
/**
 * Export the actions to add, delete, and update contacts
 * from the contactsSlice.
 */
export { addContact, deleteContact, updateContact } from './contactsSlice';
