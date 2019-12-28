import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'


import Filter from './Filter'
import AddPersons from './AddPerson'
import Notification from './Notification'

const Persons = ({ persons, filter, setPersons, personDelete, message }) => {

    if (filter == null) {
      const person = persons.map(person =>
        <li key={person.name}>
          {person.name} {person.number}
          <button onClick={() => personDelete(person.id)}> poista</button>
        </li>)
  
      return (
        <ul>
          {person}
        </ul>
      )
    }
  
    else {
      const person = persons.filter(person => {
        return person.name.indexOf(filter) >= 0
      }).map(person =>
        <li key={person.name}>
          {person.name} {person.number}
          <button onClick={() => personDelete(person.id)}> poista</button>
        </li>)
  
      return (
        <ul>
          {person}
        </ul>
      )
    }
  }


export default Persons
  