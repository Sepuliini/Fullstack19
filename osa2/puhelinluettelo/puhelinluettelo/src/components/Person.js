import React, { useState } from 'react'

const Person = ({persons, setPersons}) => {
    const names = persons.map(person => <li key={person.id}>{person.name}
    <em key={person.number}>{person.number}</em>
    <em> <button onClick={() => personDelete()}>delete</button></em>
     </li>)

     const personDelete = () => {

      return (
        <div>

        </div>
      )
     }

  return (  
    <div>
        {names}
       
    </div>
  )
}

export default Person