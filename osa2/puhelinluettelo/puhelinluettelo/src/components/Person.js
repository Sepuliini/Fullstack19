import React, { useState } from 'react'
import axios from 'axios'

//services
import personService from '../services/persons'

const Person = ({persons, setPersons}) => {
    const names = persons.map(person => <li key={person.id}>{person.name}
    <em key={person.number}>{person.number}</em>
    <em> <button onClick={() => personDelete(person.id)}>delete</button></em>
     </li>)

const personDelete = id => {
  const person = persons.find(p => p.id === id)
  if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
    personService
      .deletePerson(id)
      .then(res => {
        setPersons(persons.filter(person => person.id !== id))    
      })
      .catch(err => {  
        console.log('error')  
    })
  }
}

  return (  
    <div>
        {names}     
    </div>
  )
}

export default Person