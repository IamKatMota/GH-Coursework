import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";


const API_URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"

function ContactList({setSelectedContactIdProp}) {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        async function fetchContacts() {
            try {
                const promise = await fetch(`${API_URL}`)
                const response = await promise.json()
                console.log("Fetched contacts:", response)
                //directly set the contacts state
                setContacts(response)
                console.log("Updated contacts state:", contacts)

            }
            catch (error) {
                console.error(error)
            }
        }
        fetchContacts()
    }, [])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th colSpan="3"> Contact List</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th> Name</th>
                        <th> Email</th>
                        <th> Phone</th>
                    </tr>
                    {
                        contacts.map((contact) => {
                            return <ContactRow key={contact.id} contactProp={contact} setSelectedContactIdProp={setSelectedContactId}/> //passing the contact data (an object from the contacts array) as a prop to the ContactRow component so ContactRow can use the data from the contact object
                        })
                    }

                </tbody>
            </table>
        </>
    )

}

export default ContactList