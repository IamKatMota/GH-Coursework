function ContactRow({ contactProp, setSelectedContactIdProp }) {
    return (
        <>
            <tr className= "selectedRow" onClick={
                () => setSelectedContactIdProp(contactProp.id)}>
                <td>{contactProp.name}</td>
                <td>{contactProp.email}</td>
                <td>{contactProp.phone}</td>
            </tr>
        </>
    )
}

export default ContactRow