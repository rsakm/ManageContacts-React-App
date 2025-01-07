import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
function ContactLists({contacts, removeContact}) {

  // console.log(contacts, "from contactList")

  const contactList = contacts.map((val)=>{
    return (
      <div className='contacts' key={val.id}>
        <div style={{marginLeft:"2px"}}>{val.name}</div>
        <div className='email'>{val.email}</div>
        <span onClick={()=>removeContact(val.id)}><DeleteIcon/> </span>
      </div>
    )
  })
  return (
   <>
    <div className='contacts-Header'>Contact List</div>
    <div >{contactList}</div>
   </>
  )
}

export default ContactLists