import { useDispatch, useSelector } from 'react-redux';
import { IconX } from '@tabler/icons-react';
import { InitialState } from '@Services/types';
import { closeModal, updateContact } from '@Services';
import { TextInput } from '@Components/Input/TextInput';
import { RadioInput } from '@Components/Input/RadioInput';
import { getFormattedName, getUppercaseFirstLetter } from '@Utils';
import { CONTACT_STATUS_ACTIVE, EMPTY_STR, MODAL_TYPE_ADD, MODAL_TYPE_VIEW } from '@Constants';

export function Modal({ contact, setContact, handleChange, handleSubmit }: ModalProps) {
    const { type } = useSelector((state: InitialState) => state.modal);
    const dispatch = useDispatch();

    const handleCloseModal = () => {
        setContact({ firstName: EMPTY_STR, lastName: EMPTY_STR, status: CONTACT_STATUS_ACTIVE });
        dispatch(closeModal());
    }

    const handleUpdateContact = () => {
        dispatch(updateContact(contact));
        handleCloseModal();
    }

    const { firstName, lastName, status } = contact;

    return (
        <div className="fixed z-100 overflow-y-auto top-0 w-full left-0 shadow-xl transform transition-all" id="modal">
            <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-[#00000030] backdrop-blur-sm" />
                </div>
                <span className="inline-block align-middle h-screen">&#8203;</span>
                <div className="px-4 sm:px-6 inline-block align-center font-medium text-white bg-neutral-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    {
                        type === MODAL_TYPE_VIEW
                            ? (
                                <div className="pt-5 pb-4">
                                    <header className='w-full flex justify-between items-center'>
                                        <h3 className="text-2xl font-semibold">View Contact</h3>
                                        <IconX title='Close' onClick={handleCloseModal} className='cursor-pointer hover:text-red-500' />
                                    </header>
                                    <section className='mt-5 grid grid-cols-2 gap-2 text-sm font-normal text-neutral-400 pb-6'>
                                        <div>
                                            <h5>First Name</h5>
                                            <h2 className='text-3xl text-violet-600 font-bold tracking-wide'>{getUppercaseFirstLetter(firstName)}</h2>
                                        </div>
                                        <div>
                                            <h5>Last Name</h5>
                                            <h2 className='text-3xl text-violet-600 font-bold tracking-wide'>{getUppercaseFirstLetter(lastName) || 'NA'}</h2>
                                        </div>
                                        <div className='col-span-2'>
                                            <h5>Full Name</h5>
                                            <h2 className='text-3xl text-violet-600 font-bold tracking-wide'>{getFormattedName(firstName, lastName)}</h2>
                                        </div>
                                        <div className='col-span-2'>
                                            <h5>Status</h5>
                                            <h2 className={`text-3xl ${status === CONTACT_STATUS_ACTIVE ? 'text-green-500' : 'text-red-500'} font-bold tracking-wide`}>{getUppercaseFirstLetter(status)}</h2>
                                        </div>
                                    </section>
                                </div>
                            )
                            : (
                                <>
                                    <div className="pt-5 pb-4">
                                        {
                                            type === MODAL_TYPE_ADD
                                                ? <h3 className="text-2xl font-semibold pb-5">Create Contact</h3>
                                                : <h3 className="text-2xl font-semibold pb-5">Update Contact</h3>
                                        }
                                        <TextInput labelName="First Name" name="firstName" value={firstName} onChange={handleChange} autofocus={true} />
                                        <TextInput labelName="Last Name" name="lastName" value={lastName} onChange={handleChange} />
                                        <RadioInput labelName="Status" value={status} onChange={handleChange} />
                                    </div>
                                    <div className="flex justify-end items-center gap-6 py-3 pb-6">
                                        <button onClick={handleCloseModal} type="button" className="py-2 px-4 rounded-lg border border-red-600 text-red-600 hover:bg-red-600 hover:text-white">Cancel</button>
                                        {
                                            type === MODAL_TYPE_ADD
                                                ? <button onClick={handleSubmit} type="submit" className="py-2 px-4 rounded-lg border border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700">Save Contact</button>
                                                : <button onClick={handleUpdateContact} className="py-2 px-4 rounded-lg border border-green-600 bg-green-600 hover:bg-green-700 hover:border-green-700">Save Edited Contact</button>
                                        }
                                    </div>
                                </>
                            )
                    }
                </div>
            </div >
        </div >
    )
}
