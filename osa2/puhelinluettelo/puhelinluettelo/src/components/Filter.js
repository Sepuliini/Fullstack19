import React, { useState } from 'react'


const Filter = ({persons, setPersons}) => {
    //?
    const [ filter, setFilter ] = useState('')
  
    const handleFilterChange = (event) => {
      console.log(event.target.value)
      setFilter(event.target.value)
    }
  
    const handleFilter = (event) => {
      event.preventDefault()
  
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

  export default Filter