function ContactRow({contactProp}) {
return (
    <>
    <tr>
        <td>{contactProp.name}</td>
        <td>{contactProp.email}</td>
        <td>{contactProp.phone}</td>
    </tr>
    </>
)
}

export default ContactRow