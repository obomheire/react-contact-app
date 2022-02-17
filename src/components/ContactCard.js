import React from 'react'
import { Link } from 'react-router-dom'
import user from '../images/user.png'

const ContactCard = ({contact}) => {

    const {id, name, email} = contact
    
    return (
        <div className='item'>
            <img className='ui avatar image' src={user} alt="user" />
         <div className='content'>
        <Link to={`/contact/${id}`} state={{contact: contact}}>
            <div className='header'>{name}</div>
            <div>{email}</div>
        </Link>
        </div>

        <Link to={`/contact/delete/${id}`} state={{id: contact.id}}>
        <i className='trash alternate outline icon' style={{color:'red', marginTop:'7px', marginLeft:'10px'}} >
        </i>
        </Link>

        <Link to={`/contact/edit/`} state={{contact: contact}}>
        <i className='edit alternate outline icon' style={{color:'red', marginTop:'7px'}}>
        </i>
        </Link>
 
    </div>
    )
}

export default ContactCard
