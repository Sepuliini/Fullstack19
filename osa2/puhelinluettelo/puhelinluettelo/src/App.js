import React from 'react';
import './App.css';
import { useState } from 'react'

const Person = ({persons, setPersons}) => {
    const names = persons.map(person => <li key={person.id}>{person.name}
    <em key={person.number}>{person.number}</em>
     </li>)

  return (  
    <div>
     <p>
        {names}
      </p>
    </div>
  )
}

const Filter = ({persons, setPersons}) => {
  //kesken
  const [ filter, setFilter ] = useState('')

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  const handleFilter = (event) => {
    event.preventDefault()
    const filters = filter.toLowerCase

    setPersons(persons.filter(p => p.name.toLowerCase().includes(filter)))

    console.log(persons)
    setFilter('')
  }

  return (
    <div>
    <form onSubmit = {handleFilter}>
    filter shown with: <input value = {filter} onChange = {handleFilterChange}/>
    </form>
    </div>
  )

}

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


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

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