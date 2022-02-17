import { useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import React from 'react'
import './App.css'
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import ContactDetail from './ContactDetail'
import DeleteContact from './DeleteContact'
import EditContact from './EditContact'
import api from '../api/contacts'
// import { uuid }  from 'uuidv4'

const App = () => {
// const LOCAL_STORAGE_KEY = 'contacts'

  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  // Retrive Contacts
const retrieveContacts = async () => {
  const response = await api.get('/contacts')
  let data = response.data
  return data
}

  const addContactHandler = async (contact) =>{
    // let id = Date.now()
    // setContacts([...contacts, {id, ...contact}])

    let id = Date.now()
      const response = await api.post('/contacts', {id, ...contact})
      let data = response.data
      setContacts([...contacts, data])
    }

    const updateContactHandler = async (contact) =>{
      // console.log(contact)
      const response = await api.put(`/contacts/${contact.id}`, contact)
      const data = response.data
      
      setContacts(contacts.map(contact =>{
        return contact.id === data.id ? { ...data }: contact
      })
      )
    }
  

  const removeContactHandler = async (id) => {
  //  const newContactList = contacts.filter((contact) => contact.id !== id)
  //   setContacts(newContactList)

await api.delete(`/contacts/${id}`)

const newContactList = contacts.filter(contact =>{
  return contact.id !== id
})
setContacts(newContactList)

  }

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm !== "") {
      const newContactList = contacts.filter(contact => {
        // console.log(Object.values(contact).join(''))
        return Object.values(contact).join('').toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResults(newContactList)

    }else{
      setSearchResults(contacts)
    }
  }

  useEffect(() => {
  //   const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   retrieveContacts && setContacts(retrieveContacts)
  
  const getAllContacts = async () => {
    const allContacts = await retrieveContacts()
    if (allContacts) setContacts(allContacts)
  }

  getAllContacts()
    
   },[])

//  useEffect(() => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
//  },[contacts])


  return (
    <Router>
    <div className='ui container'>
      <Header />
      <Routes>
        {/* <Route path='/' exact element={(<ContactList contacts={contacts} term={searchTerm} searchKeyword={searchHandler}/>)}/> */}
        <Route path='/' exact element={(<ContactList contacts={searchTerm.length < 1 ? contacts : searchResults} term={searchTerm} searchKeyword={searchHandler}/>)}/>
        <Route path='/add' exact element={(< AddContact  addContact={addContactHandler} />)}/>
        <Route path='/contact/:id' element={(< ContactDetail />)} />
        <Route path='/contact/delete/:id' element={(< DeleteContact deleteContact={removeContactHandler}/>)} />
        <Route path='/contact/edit' element={(< EditContact updateContact={updateContactHandler}/>)} />
      </Routes>
    </div>
    </Router> 
  )
}

export default App
