import React, { useState } from 'react'

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

export default Person