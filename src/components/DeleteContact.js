import React from 'react'
import { useLocation, useNavigate, Link} from 'react-router-dom'

const DeleteContact = ({deleteContact}) => {
    
let navigate = useNavigate()

    const location = useLocation()
    const { id } = location.state

const removeContact = () =>{
    deleteContact(id)
    navigate('/', {replace: true})
    return
} 

    

    return (
        <div className='ui main'>

            <div className='center floated'><h2>Are you sure you want to delete this contact?</h2> </div>
           <div><button className='ui button blue left floated' onClick={removeContact}>Delete</button></div>
           <div><Link to='/'><button className='ui button blue right floated'>Cancel</button></Link></div>

        </div>
    )
}

// onClick={()=> removeContact(id)}

export default DeleteContact
