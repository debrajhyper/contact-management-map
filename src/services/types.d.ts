import { CONTACT_STATUS_ACTIVE, CONTACT_STATUS_INACTIVE, EMPTY_STR, MODAL_TYPE_ADD, MODAL_TYPE_EDIT, MODAL_TYPE_VIEW } from '@Constants';

type Status = CONTACT_STATUS_ACTIVE | CONTACT_STATUS_INACTIVE

type Contact = {
    id?: string,
    firstName: string,
    lastName: string,
    status: Status | EMPTY_STR,
}

type ContactsState = {
    contacts: Contact[]
}

type ModalState = {
    isOpen: boolean,
    type: MODAL_TYPE_ADD | MODAL_TYPE_EDIT | MODAL_TYPE_VIEW | EMPTY_STR
}

type InitialState = {
    contacts: ContactState,
    modal: ModalState
}