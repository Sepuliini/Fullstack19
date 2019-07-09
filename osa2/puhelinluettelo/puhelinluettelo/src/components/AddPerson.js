import React, { useState } from 'react'


const AddPerson = ({persons, setPersons}) => {
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
  
    console.log((persons.filter(p => p.name === newName).length > 0))
  
    const addName = (event) => {
      event.preventDefault()
      console.log('button clicked', event.target)
  
      const personObject = {
      name: newName + ' ',
      number: newNumber
      }
  
        if ((persons.filter(p => p.name.toLowerCase === newName).length > 0) === true) {
          window.alert(`${newName} is already added to phonebook`)
          setNewName('')  
          setNewNumber('')
        }
  
        else {
          setPersons(persons.concat(personObject))
          console.log(persons)
          setNewNumber('')
          setNewName('')
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
