import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

//components
import AddPerson from './components/AddPerson'
import Filter from './components/Filter'
import Person from './components/Person'

//services
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([

  ]) 

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  


  return (
    <div>
      <div>
        <h2>Phonebook</h2>
        <Filter persons = {persons} setPersons = {setPersons}/>
      </div>
      <h2>Add a new</h2>
        <AddPerson persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
       <Person persons = {persons} />
    </div>
    
  )
}

export default App