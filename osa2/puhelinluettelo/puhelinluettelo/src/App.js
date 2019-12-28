
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'


import './index.css'
import personService from './services/persons'

import Persons from './components/Person'
import Filter from './components/Filter'
import AddPersons from './components/AddPerson'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState({ error: true, text: '' })

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const personDelete = id => {
    const person = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(id)
        .then(res => {
          setPersons(persons.filter(person => person.id !== id))

          setMessage({
            error: false,
            text: `deleted ${person.name}`
          })
    
          setTimeout(() => {
            setMessage(null)
          }, 5000)

        })
        .catch(err => {
          console.log('error')

          setMessage({
            error: true,
            text: `${person.name} is already removed`
          })

          setTimeout(() => {
            setMessage(null)
          }, 5000)

        })

    }
  }

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }

    const nimet = persons.map(nimi => nimi.name);
    console.log('nimet',nimet)

    if (nimet.indexOf(nameObject.name) != -1) {

      const message = `${newName} is already added to phonebook replace number with a new one?`
      const oldPerson = persons.find(p => p.name === newName)
      const replacePerson = { ...oldPerson, number: newNumber }

      if (window.confirm(message)) {
        personService
          .updatePerson(oldPerson.id, replacePerson)
          .then(replacePerson => {
            setPersons(persons.map(p => p.id !== oldPerson.id ? p : replacePerson))
          })

          .catch(err => {
            console.log('error')
  
            setMessage({
              error: true,
              text: `${newName} is already removed`
            })
  
            setTimeout(() => {
              setMessage(null)
            }, 5000)
  
          })
  

        setMessage({
          error: false,
          text: `replaced ${newName}'s number with a new one`
        })

        setTimeout(() => {
          setMessage(null)
        }, 5000)

        console.log("nimi muutettu")
        setNewName('')
        setNewNumber('')
      }
    }

    else {
      personService
        .create(nameObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')

        })

        setMessage({
          error: false,
          text: `added ${newName}`
        })

        setTimeout(() => {
          setMessage(null)
        }, 5000)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
      </div>
      <div>
        <Notification message={message} />
      </div>
      <h3>Add a new person</h3>
      <AddPersons newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addPerson={addPerson} message={message} />
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} filter={newFilter} personDelete={personDelete} message={message} />
    </div>
  )
}

export default App