import React, { useRef } from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

const ContactList = ({contacts, term, searchKeyword}) => {
    // console.log(contacts)
    const inputEl = useRef('')


  const renderContactList = contacts.map((contact) =>{
      return (
        <ContactCard key={contact.id} contact={contact} />
      )
  })

  const getSerchTerm = () => {
    // console.log(inputEl.current.value)
    searchKeyword(inputEl.current.value)
  }
    return (
      <div className='main'>
        <h2>
        Contact List
        <Link to='/add'>
        <button className='ui button blue right floated'>Add Contact</button>
        </Link>
          </h2>
          <div className='ui search'>
              <div className='ui icon input'>
                <input ref={inputEl} type="text" placeholder='Search Contacts' className='prompt' value={term} onChange={getSerchTerm}/>
                <i className='search icon'></i>
              </div>
          </div>
        <div className='ui celled list'>{renderContactList}</div>
        <div className='ui celled list'>
           {renderContactList.length > 0 ? renderContactList : 'No Contact Available'}
        </div>
      </div>
    );
};

export default ContactList
