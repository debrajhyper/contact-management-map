type ModalProps = {
    contact: Contact,
    setContact: (contact: Contact) => void,
    handleChange: (e: { target: { name: string; value: string; }; }) => void,
    handleSubmit: (e: { preventDefault: () => void; }) => void
}