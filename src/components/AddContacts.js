import React, { useState } from 'react'

function AddContacts({addContact}) {

  const [contactData, setContactData] = useState({name:"", email:""})

  const handleChange = (e)=>{
    if(e.target.name === 'name'){
      setContactData({...contactData, name:e.target.value})
    }else{
      setContactData({...contactData, email:e.target.value})
    }
  }

  const handleAdd = ()=>{
    if(contactData.name === "" || contactData.email === ""){
      alert("please fill all the details for new contact ")
      return
    }
    addContact(contactData)
    setContactData({name:"",email:""}) //reset after clicking the button
  }
  return (
    <div className='formHeader'>
        <div className='add-contact'>Add Contact</div>
        <form >
            <label htmlFor="name">Name:</label><br />
            <input type="text" placeholder='Enter Name' name='name' value={contactData.name} onChange={handleChange} id='name'/><br />

            <label htmlFor="email">Email:</label><br />
            <input type="email" placeholder='Enter Email' name='email' value={contactData.email} onChange={handleChange} id='email'/>
        </form>
        <button className='btn' onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default AddContacts