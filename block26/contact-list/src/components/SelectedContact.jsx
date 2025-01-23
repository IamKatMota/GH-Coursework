import { useState, useEffect } from "react"
//declare used state
//declare a variable for currently selected contact and find the contact id that matches the selected contact
//iterate through the contacts and onClick set the selected contact id to be the featured contact id
//return the featured contact info

// const selectedContact = contacts.find((contact) => contact.id === selectedContactId)

const API_URL = 'https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/'

function SelectedContact ({selectedContactProp , selectedContactIdProp}){
    const [singleContact, setSingleContact] = useState(null)
    useEffect(() => {
        async function fetchSingleContact (){
            try {
                const promise = await fetch(`${API_URL}${selectedContactIdProp}`)
                const response = await promise.json()
                console.log('fetched single contact', response)

                setSingleContact(response)
                console.log('Updated single contact state', singleContact)

            }
            catch (error){
                console.error(error)
            }
        }
        fetchSingleContact()
    }, [])
    return(
        <>
        </>
    )
}

export default SelectedContact