
import { useEffect, useState } from 'react';
import './App.css';
import AddContacts from './components/AddContacts';
import ContactLists from './components/ContactLists';
import Header from './components/Header';
import uuid4 from 'uuid4'

function App() {
  const localStorageKey = "contact"
const [contact, setContact] = useState(()=>{
  return JSON.parse(localStorage.getItem(localStorageKey)) || []
} )

useEffect(()=>{
  localStorage.setItem(localStorageKey, JSON.stringify(contact))
},[contact])

  const addContact = (data)=>{
    // console.log(data)

    if (data.name && data.email) {
      
      const newContact = { id: uuid4(), ...data };
      setContact([...contact, newContact]);
    } 
  }

  const removeContact=(id)=>{
    const updatedList = contact.filter((contact)=>{
      return contact.id !== id
    })
    setContact(updatedList)
  }

  return (
    <div >
      <Header/>
      <AddContacts addContact={addContact}/>
      <ContactLists contacts={contact} removeContact={removeContact}/>
    </div>
  );
}

export default App;
