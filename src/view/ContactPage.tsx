import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Modal } from '@Components';
import { InitialState, Contact } from '@Services/types';
import { closeModal, openModal, addContact } from '@Services';
import { IconPlus, IconCircleXFilled } from '@tabler/icons-react';
import { CONTACT_STATUS_ACTIVE, EMPTY_STR, MODAL_TYPE_ADD, MODAL_TYPE_EDIT, MODAL_TYPE_VIEW } from '@Constants';

export function ContactPage() {
    const { isOpen } = useSelector((state: InitialState) => state.modal);
    const { contacts } = useSelector((state: InitialState) => state.contacts);
    const dispatch = useDispatch();
    const [contact, setContact] = useState<Contact>({
        firstName: EMPTY_STR,
        lastName: EMPTY_STR,
        status: CONTACT_STATUS_ACTIVE
    })

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if(!contact.firstName) return
        dispatch(addContact(contact));
        setContact({ firstName: EMPTY_STR, lastName: EMPTY_STR, status: CONTACT_STATUS_ACTIVE });
        dispatch(closeModal());
    }

    const handleEditContact = (id: string | undefined) => {
        if (!id) return
        const contact = contacts.find((contact: Contact) => contact?.id === id);
        setContact(contact);
        dispatch(openModal(MODAL_TYPE_EDIT));
    }

    const handleViewContact = (id: string | undefined) => {
        if (!id) return
        const contact = contacts.find((contact: Contact) => contact?.id === id);
        setContact(contact);
        dispatch(openModal(MODAL_TYPE_VIEW));
    }

    return (
        <section className='w-full h-full mt-0 md:mt-8'>
            <button onClick={() => dispatch(openModal(MODAL_TYPE_ADD))} className="mx-auto bg-neutral-800 px-4 py-2 hover:bg-neutral-900 font-semibold rounded-lg border border-neutral-700 flex gap-2">
                <IconPlus size={20} />
                Create Contact
            </button>
            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 gap-y-9 mt-20 md:mt-26 lg:mt-40'>
                {
                    contacts.length == 0
                        ? (
                            <div className="col-span-full bg-neutral-700 flex flex-row gap-3 border border-neutral-500 p-4 rounded-lg w-fit mx-auto">
                                <IconCircleXFilled size={50} color='#f75050' />
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
            {isOpen && <Modal contact={contact} setContact={setContact} handleChange={handleChange} handleSubmit={handleSubmit} />}
        </section>
    )
}
