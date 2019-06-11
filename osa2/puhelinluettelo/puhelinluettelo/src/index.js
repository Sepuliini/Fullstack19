
import ReactDOM from 'react-dom';
import React, { useState } from 'react'

const Rows = (props) => {
    const rows = () => props.persons.map(person => <Person person={person} number = {props.persons.number} key={props.persons.name} />)

    const Person = ({ person }) => {
        return (
            <div>
                {person.name}
                {person.number}
            </div>
        )
    }
    
    return (
        <div>
            <ul>
            {rows()}
            </ul>
        </div>
    )
}



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: ' 040-123456' },
    { name: 'Ada Lovelace', number: ' 39-44-5323523' },
    { name: 'Dan Abramov', number: ' 12-43-234345' },
    { name: 'Mary Poppendieck', number: ' 39-23-6423122' }
  ]) 

  const [ newNumber, setNewNumber ] = useState('') 
  const [ newName, setNewName ] = useState('')

  const rows = () => persons.map(person => <Person person={person} number = {persons.number} key={persons.name} />)


  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)

    const personObject = {
        name: newName + ' ',
        number: newNumber
      }

      if (persons.filter(p => p.name === newName).length > 0) {
        console.log('nimi on jo listassa')
        setNewName('') 
        setNewNumber('')
        const message = 'NIMI ON JO LISTASSA'
        window.alert(message);
      }

      else {           
        setPersons(persons.concat(personObject))
        setNewName('')   
        setNewNumber('') 
      }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  return (
     
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>  
    <div>
      name: <input value={newName} onChange={handlePersonChange} />
      <div>
      number: <input value={newNumber} onChange={handleNumberChange}/>
      </div> 
     <button type="submit">add</button> 
     </div>
      </form>   
      <div>
          <h2>Numbers</h2>
      </div>
      <Rows persons = {persons}/>
    </div>
  )

}

export default App

ReactDOM.render(<App />, document.getElementById('root'));

