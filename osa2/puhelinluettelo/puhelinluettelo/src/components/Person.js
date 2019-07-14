import React, { useState } from 'react'
import axios from 'axios'

//services
import personService from '../services/persons'

const Person = ({persons, setPersons}) => {

    const names = persons.map(person => <li key={person.id}>{person.name}
    <em key={person.number}>{person.number}</em>
    <em> <button onClick={() => personDelete()}>delete</button></em>
     </li>)

     const personDelete = () => {


      //kesken


      personService.deletePerson(persons.id)
      .then(res => {
        setPersons(persons.filter(p => p.id !== persons.id))
      })
      .catch(err => {
        setPersons(persons.filter(p => p.id !== persons.id))   
        })
     }


  return (  
    <div>
        {names}     
    </div>
  )
}

export default Person