import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'



import Persons from './Person'
import Filter from './Filter'
import Notification from './Notification'


const AddPersons = ({ addPerson, newName, handleNameChange, newNumber, handleNumberChange, message }) => {
    return (
  
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  
    )
  }


  export default AddPersons