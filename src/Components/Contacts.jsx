import React from 'react'
import ContactUserCard from './ContactUserCard'
import '../Components/contacts.css'

const Contacts = () => {
  return (
    <div className='contacts'>Contacts
      <ContactUserCard/>
      <ContactUserCard/>
      <ContactUserCard/>
      <ContactUserCard/>
    </div>
  )
}

export default Contacts
