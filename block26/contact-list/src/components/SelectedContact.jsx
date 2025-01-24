import { useState, useEffect } from "react"
import SingleContactRow from "./SingleContactRow"

const API_URL = 'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/'

function SelectedContact({ selectedContactIdProp, setSelectedContactIdProp }) {
    const [singleContact, setSingleContact] = useState(null)
    useEffect(() => {
        async function fetchSingleContact() {
            try {
                const promise = await fetch(`${API_URL}${selectedContactIdProp}`)
                const response = await promise.json()
                console.log('fetched single contact', response)

                setSingleContact(response)

            }
            catch (error) {
                console.error(error)
            }
        }
        fetchSingleContact()
    }, [selectedContactIdProp]) //useEffect triggers when the selected contact ID changes

    if (!singleContact) {
        return <p>Loading contact details...</p>;
    }
    return (
        <>
            <div className="container">

                <table>
                    <thead>
                        <tr>
                            <th colSpan="3">{singleContact.name}'s Details</th>
                        </tr>
                    </thead>
                    <tbody>

                        {

                            (<SingleContactRow key={singleContact.id} singleContactProp={singleContact} setSelectedContactIdProp={setSelectedContactIdProp} />) //passing the contact data (an object from the contacts array) as a prop to the ContactRow component so ContactRow can use the data from the contact object
                            //{setSelectedContactIdProp} is the value of setSelectedContactIdProp that ContactList receieved (which is set as setSelectedContactId from App.jsx)

                        }

                    </tbody>
                </table>
                        <button onClick={() => setSelectedContactIdProp(null)}>
                            Go Back
                        </button>
            </div>
        </>
    )
}

export default SelectedContact