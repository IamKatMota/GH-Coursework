function singleContactRow({singleContactProp}){
    return (
        <>
            <tr>
                <td className="header">Address</td>
                <td>{singleContactProp.address.city}, {singleContactProp.address.street}, {singleContactProp.address.zipcode}</td>
            </tr>
            <tr>
                <td className="header">Company & Catch Phrase</td>
                <td>{singleContactProp.company.name}: {singleContactProp.company.catchPhrase}</td>
            </tr>
            <tr>
                <td className="header">Website</td>
                <td>{singleContactProp.website}</td>
            </tr>
            <tr>
                <td className="header">Username</td>
                <td>{singleContactProp.username}</td>
            </tr>
        </>
    )
}

export default singleContactRow
