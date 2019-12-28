import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'



import Persons from './Person'
import AddPersons from './AddPerson'
import Notification from './Notification'

const Filter = ({ newFilter, setNewFilter }) => {
    const handleFilterChange = (event) => {
      console.log(event.target.value)
      setNewFilter(event.target.value)
    }
    return (
      <div>
        <p>
          filter: <input value={newFilter} onChange={handleFilterChange} />
        </p>
      </div>
    )
  }


export default Filter