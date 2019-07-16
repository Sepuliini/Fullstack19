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
   <div className= 'good'>
     {message}
   </div>
 )
}

const AddPerson = ({persons, setPersons}) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ message, setMessage] = useState(null)

    console.log((persons.filter(p => p.name === newName).length > 0))
  
    const addName = (event) => {
      event.preventDefault()
      console.log('button clicked', event.target)
  
      const personObject = { 
      name: newName + ' ',
      number: newNumber,
      id: persons.length + 1 
      }

      const oldPerson = persons.find(p => p.name === newName)
      console.log('löytyykö?' + oldPerson)

        if (oldPerson !== null) {
          const replacePerson = {...oldPerson, number: newNumber}

          if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
            personService
              .updatePerson(oldPerson.id, replacePerson)
              .then(replacePerson => {
              setPersons(persons.map(p => p.id !== oldPerson.id ? p : replacePerson))

              setMessage(
                `Updated ${newName}`
              )
              setTimeout(() => {
              setMessage(null)
              }, 5000)

              setNewName('')
              setNewNumber('')
            })
          }       
        }
  
      else {
          personService
          .create(personObject)
          .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
      })
    }
  }
  
    const handleNameChange = (event) => {
      console.log(event.target.value)
      setNewName(event.target.value)
    }
  
    const handleNumberChange = (event) => {
      console.log(event.target.value)
      setNewNumber(event.target.value)
    }
  
  return (
    <div>
      <Notification message={message}/>
      <form onSubmit = {addName}>
          <div>
            name: <input value = {newName}  onChange={handleNameChange}/>
            <div>
              number: <input value = {newNumber} onChange={handleNumberChange}/>
            </div>
            </div>
            <div>     
            <button type="submit">add</button>
          </div>
        </form>
    </div>
    )
  }


  export default AddPerson
