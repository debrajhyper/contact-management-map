type ContactProps = {
    contact: Contact,
    handleEditContact: (id: string | undefined) => void,
    handleViewContact: (id: string | undefined) => void
}