import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


const AddContact = (props) => {

let navigate = useNavigate();

const { addContact } = props

const [name, setName] = useState('')
const [email, setEmail] = useState('')

    const add = (e) => {

        e.preventDefault();
        if(!name && !email){
            alert('Filed cannot be empty')
            return
        }

        // let contact = {name: name, email: email};
        let contact = {name, email}
       
        addContact(contact);

        // setName('')
        // setEmail('')
        
        navigate('/', {replace: true})

    };

    return (
        <div className='ui main'>
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={add}>
             <div className='field'>
                 <label>Name</label>
                 <input type="text" name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='field'>
                 <label>Email</label>
                 <input type="email" name='email' placeholder='Email' value={email}onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button className='ui button blue'>Add</button>
        </form>
       
    </div>
    )
}

export default AddContact

/*
class AddContact extends React.Component {
    
    state = {
        name: "",
        email: ""
    }

    add = (e) => {

        e.preventDefault();
        if(this.state.name === '' && this.state.email === ''){
            alert('Filed cannot be empty')
            return
        }

        this.props.addContactHandler(this.state);
        this.setState({name: '', email: ''});

        // console.log(this.props)
    };
    
    render() {
        return (
            <div className='ui main'>
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                     <div className='field'>
                         <label>Name</label>
                         <input type="text" name='name' value={this.state.name} placeholder='Name' onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                    <div className='field'>
                         <label>Email</label>
                         <input type="email" name='email' value={this.state.email} placeholder='Email' onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
               
            </div>
        )
    }

}

export default AddContact

*/

/*
NB: This code did not wor well

const AddContact = (props) => {
    const { addContact } = props
    
    const [state, setState] = useState({name: '', email: ''})
    
        const add = (e) => {
            e.preventDefault();
            if(!state.name && !state.email){
                alert('Filed cannot be empty')
                return
            }
    
            // let contact = {name: name, email: email};
            // let contact = {state.name, state.email}
           
            addContact(state);
    
            setState({name: '', email: ''})
    
            // console.log(this.props)
        };
        return (
            <div className='ui main'>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={add}>
                 <div className='field'>
                     <label>Name</label>
                     <input type="text" name='name' placeholder='Name' value={state.name} onChange={(e) => setState({name: e.target.value})} />
                </div>
                <div className='field'>
                     <label>Email</label>
                     <input type="email" name='email' placeholder='Email' value={state.email}onChange={(e) => setState({email: e.target.value})} />
                </div>
                <button className='ui button blue'>Add</button>
            </form>
           
        </div>
        )
    }
    
    export default AddContact
  */  
