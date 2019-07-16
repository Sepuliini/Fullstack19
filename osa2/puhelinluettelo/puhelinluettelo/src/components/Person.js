import React, { useState } from 'react'
import axios from 'axios'
import '../index.css'

//services
import personService from '../services/persons'

const Notification = ({ message, className }) => {
  if (message === null) {
   return null
  }

 return (
   <div className= 'error'>
     {message}
   </div>
 )
}

const Person = ({persons, setPersons}) => {
  const [ message, setMessage] = useState(null)

    const names = persons.map(person => <li key={person.id}>{person.name}
    <em key={person.number}>{person.number}</em>
    <em> <button onClick={() => personDelete(person.id)}>delete</button></em>
     </li>)

const personDelete = id => {
  const person = persons.find(p => p.id === id)
  if (window.confirm(`Delete ${person.name}?`)) {
    personService
      .deletePerson(id)
      .then(res => {
        setPersons(persons.filter(person => person.id !== id))    
      })
      .catch(err => {  
        console.log('error')  
    })

    setMessage(
      `deleted ${person.name}`
    )
    setTimeout(() => {
    setMessage(null)
    }, 5000)


  }
}

  return (  
    <div>
        <Notification message = {message}/>
        {names}     
    </div>
  )
}

export default Person