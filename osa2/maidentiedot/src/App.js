import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryList = ({countries}) => {

  return (
    <div>
      {countries}
    </div>
  )
}

const CountriesFiltered = ({countries}) => {

  if (countries.length === 1) {
      return (
      <CountryList countries = {countries[0]} />)
  }

  if (countries.length > 10) {
      return (
      <div>
        Too many matches, speficy another filter
      </div>
      )
  }

  return (
    countries.map(c => <CountryList countries = {c.name} key = {c.name}/>
          )
       )
    }
    


function App() {
  const [ filter, setNewFilter ] = useState('')
  const [ countries, setCountry] = useState([]) 

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountry(response.data)
      })
  }, [])

  console.log('render', countries.length)
  console.log(countries.name)

    const handleFilterChange = (event) => {
      console.log(event.target.value)
      setNewFilter(event.target.value)
    }

    
    const filterCountries = (event) => {
      event.preventDefault()

      setCountry(countries.filter(country =>
        country.name.includes(filter)))
        
    }


  //const rows = () => countries.map(c => <CountryList key = {countries.name} countries = {c.name}/>)

  return (
    <div>
        <form onSubmit = {filterCountries}>
          <div>
          find countries: <input value = {filter}  onChange={handleFilterChange}/>
          </div>
        </form>
        <div>
          <CountriesFiltered countries = {countries} />
        </div>
  </div>
  );
}

export default App;
