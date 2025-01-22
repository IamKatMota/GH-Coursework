import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>

      {
        selectedContactId ? <SelectedContact selectedContactIdProp = {selectedContactId} setSelectedContactIdProp = {setSelectedContactId}/> : <ContactList setSelectedContactIdProp = {setSelectedContactId}/>
      }

    </>
  )
}

export default App
