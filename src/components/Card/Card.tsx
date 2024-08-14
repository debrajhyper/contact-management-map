import { useDispatch } from 'react-redux';
import { deleteContact } from '@Services';
import { CONTACT_STATUS_ACTIVE } from '@Constants';
import { IconEdit, IconTrash, IconEye } from '@tabler/icons-react';
import { getUppercaseFirstLetter } from '@Utils';

/**
 * Card component that displays contact information and provides actions to edit and delete the contact.
 * @param contact object containing contact information (id, firstName, lastName, status)
 * @param handleEditContact function to handle editing the contact
 * @param handleViewContact function to handle viewing the contact details
 * @returns JSX.Element that displays the contact information and actions
 */
export function Card({ contact: { id, firstName, lastName, status }, handleEditContact, handleViewContact }: ContactProps) {
    const dispatch = useDispatch(); // get the dispatch function from useDispatch hook

    return (
        <div className="relative rounded-md shadow-md p-4 pt-2 bg-neutral-700">
            {/* container for the contact information */}
            <div className='relative flex justify-between items-center'>
                {/* container for the contact avatar and name */}
                <div title={status} className="cursor-pointer absolute -top-6 w-14 h-14 flex justify-center items-center rounded-full bg-cyan-900 border border-white text-xl text-white">
                    {/* display the first initial of the first name and last name */}
                    <div className="w-full text-center align-middle uppercase">{firstName[0]}{lastName[0]}</div>
                    {/* display a dot indicating the status of the contact */}
                    <div className={`absolute right-0 bottom-0 w-3 h-3 rounded-full ${status === CONTACT_STATUS_ACTIVE ? "bg-green-500" : "bg-red-500"}`}></div>
                </div>
                {/* display the first name of the contact */}
                <h3 className='text-2xl font-semibold ml-16 line-clamp-1'>{getUppercaseFirstLetter(firstName)}</h3>
                {/* button to view contact details */}
                <IconEye title='View Contact Details' onClick={() => handleViewContact(id)} size={24} className='cursor-pointer' />
            </div>
            {/* container for the edit and delete buttons */}
            <div className='flex justify-end gap-3 mt-6 text-md text-white'>
                {/* button to edit the contact */}
                <button onClick={() => handleEditContact(id)} title='Edit Contact' className='px-2 py-1 flex justify-center items-center gap-2 rounded bg-green-600 hover:bg-green-700'>
                    <IconEdit size={18} />
                    Edit
                </button>
                {/* button to delete the contact */}
                <button onClick={() => dispatch(deleteContact(id))} title='Delete Contact' className='px-2 py-1 flex justify-center items-center gap-2 rounded border border-red-500 text-red-500 hover:bg-red-500 hover:text-white'>
                    <IconTrash size={18} />
                    Delete
                </button>
            </div>
        </div>
    )
}