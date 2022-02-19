import React from 'react'
import { useState } from 'react';
import {useNavigate, useLocation} from 'react-router-dom'


const EditContact = (props) => {

    const navigate = useNavigate();
    const location = useLocation()
    const { contact } = location.state
    // console.log(contact)
    // const { name, email } = contact

const { updateContact } = props

const [id] = useState(contact.id)
const [name, setName] = useState(contact.name)
const [email, setEmail] = useState(contact.email)

    const updated = (e) => {

        e.preventDefault();
        if(!name && !email){
            alert('Filed cannot be empty')
            return
        }

        let contact = {id, name, email}
        // console.log(contact)
       
        updateContact(contact);

        // setName('')
        // setEmail('')
        
        navigate('/', {replace: true})

    };

    return (
        <div className='ui main'>
        <h2>Edit Contact</h2>
        <form className="ui form" onSubmit={updated}>
             <div className='field'>
                 <label>Name</label>
                 <input type="text" name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='field'>
                 <label>Email</label>
                 <input type="email" name='email' placeholder='Email' value={email}onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button className='ui button blue'>Update</button>
        </form>
       
    </div>
    )
}

export default EditContact