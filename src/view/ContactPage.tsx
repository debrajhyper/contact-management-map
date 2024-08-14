import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Modal } from '@Components';
import { InitialState, Contact } from '@Services/types';
import { closeModal, openModal, addContact } from '@Services';
import { IconPlus, IconCircleXFilled } from '@tabler/icons-react';
import { CONTACT_STATUS_ACTIVE, EMPTY_STR, MODAL_TYPE_ADD, MODAL_TYPE_EDIT, MODAL_TYPE_VIEW } from '@Constants';

/**
 * ContactPage component that displays a list of contacts and a button to create a new contact.
 * It also displays a modal to add, edit, or view contact details.
 */
export function ContactPage() {
    // get the open state of the modal from the Redux store
    const { isOpen } = useSelector((state: InitialState) => state.modal);
    // get the list of contacts from the Redux store
    const { contacts } = useSelector((state: InitialState) => state.contacts);
    // get the dispatch function from the useDispatch hook
    const dispatch = useDispatch();
    // create a state variable for the contact being edited or viewed
    const [contact, setContact] = useState<Contact>({
        firstName: EMPTY_STR,
        lastName: EMPTY_STR,
        status: CONTACT_STATUS_ACTIVE
    })

    /**
     * Handle the change event for the contact form inputs.
     * @param e - the event object containing the name and value of the input
     */
    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        setContact({ ...contact, [e.target.name]: e.target.value }); // update the contact state with the new value
    }

    /**
     * Handle the submit event for the contact form.
     * @param e - the event object with a preventDefault method
     */
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // prevent the default form submission behavior
        if (!contact.firstName) return; // if the contact doesn't have a first name, return
        dispatch(addContact(contact)); // add the contact to the Redux store using the addContact action
        setContact({ firstName: EMPTY_STR, lastName: EMPTY_STR, status: CONTACT_STATUS_ACTIVE }); // reset the contact state
        dispatch(closeModal()); // close the modal
    }

    /**
     * Handle the click event to edit a contact.
     * @param id - the ID of the contact to edit
     */
    const handleEditContact = (id: string | undefined) => {
        if (!id) return; // if the ID is undefined, return
        const contact = contacts.find((contact: Contact) => contact?.id === id); // find the contact with the matching ID
        setContact(contact); // update the contact state with the found contact
        dispatch(openModal(MODAL_TYPE_EDIT)); // open the modal with the edit type
    }

    /**
     * Handle the click event to view a contact's details.
     * @param id - the ID of the contact to view
     */
    const handleViewContact = (id: string | undefined) => {
        if (!id) return; // if the ID is undefined, return
        const contact = contacts.find((contact: Contact) => contact?.id === id); // find the contact with the matching ID
        setContact(contact); // update the contact state with the found contact
        dispatch(openModal(MODAL_TYPE_VIEW)); // open the modal with the view type
    }

    {/* container for the contact list and create contact button */ }
    return (
        <section className='w-full h-full mt-0 md:mt-8'>
            <button onClick={() => dispatch(openModal(MODAL_TYPE_ADD))} className="mx-auto bg-neutral-800 px-4 py-2 hover:bg-neutral-900 font-semibold rounded-lg border border-neutral-700 flex gap-2"> {/* create contact button */}
                {/* plus icon */}
                <IconPlus size={20} />
                {/* button text */}
                Create Contact
            </button>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 gap-y-9 mt-20 md:mt-26 lg:mt-40'>
                {
                    contacts.length == 0 // if there are no contacts
                        ? (
                            <div className="col-span-full bg-neutral-700 flex flex-row gap-3 border border-neutral-500 p-4 rounded-lg w-fit mx-auto"> {/* container for the "no contacts found" message */}
                                {/* circle X icon */}
                                <IconCircleXFilled size={50} color='#f75050' />
                                {/* message text */}
                                <p className="font-semibold text-neutral-400 text-start">
                                    No Contact Found
                                    <br />
                                    Please add contact from Create Contact Button
                                </p>
                            </div>
                        )
                        : contacts.map((contact: Contact, index: number) => <Card key={index} contact={contact} handleEditContact={handleEditContact} handleViewContact={handleViewContact} />)
                }
            </section>
            {/* render the Modal component if the modal is open */}
            {isOpen && <Modal contact={contact} setContact={setContact} handleChange={handleChange} handleSubmit={handleSubmit} />}
        </section>
    )
}