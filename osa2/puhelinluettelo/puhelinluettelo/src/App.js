import React from 'react';
import './App.css';
import { useState } from 'react'
import { summarizers } from 'istanbul-lib-report';


const Person = (props) => {
  return (
    <div>
    <p>{props.person.name}</p>
    </div>
  )
}



const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const rows = () => persons.map(person => 
  <Person key = {person.name} person = {person} persons = {persons}/>
  )

  console.log((persons.filter(p => p.name === newName).length > 0))

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const nameObject = {
    name: newName  
    }

      if ((persons.filter(p => p.name === newName).length > 0) === true) {
        window.alert(`${newName} is already added to phonebook`)
        setNewName('')
      }

      else {
        setPersons(persons.concat(nameObject))
        setNewName('')
      }
  }
 
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input value = {newName}  onChange={handleNameChange}/>
        </div>
        <div>     
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
       {rows()}
    </div>
  )
}


export default App