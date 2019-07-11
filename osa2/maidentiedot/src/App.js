import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryList = ({countries, filter}) => {
  console.log('pituus', countries.length)
    console.log('ei toimi')


    return (
      <div>
        {countries.name}
        <button onClick={() => filter(countries.name)}>show</button>
      </div>
    )
}

const OneCountry = ({countries}) => {
  console.log('kieli: ', countries.languages)

  return (
    <div>
      <h1>{countries.name}</h1>
        <p>
          Capital {countries.capital}
        </p>
        <p>
        Population {countries.population}
        </p>
        <h3>languages</h3>     
        <ul>
          {countries.languages.map(l => <li key={l.name}>{l.name}</li>)}
          {countries.languages.map(la => <li key={la.nativeName}>{la.nativeName}</li>)}
        </ul>   
        <img src={countries.flag} width={250}/>   
    </div>
  )
}

const CountriesFiltered = ({countries, filter}) => {
  if (countries.length === 1) {
    console.log('toimii')
    console.log(countries.length)

      return (   
       <OneCountry countries = {countries[0]} />
      )
  }

  if (countries.length > 10) {
      return (
      <div>
        Too many matches, speficy another filter
      </div>
      )
  }

  return (
    countries.map(c => <CountryList countries = {c} key = {c.name} filter = {filter}/>
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
          <CountriesFiltered countries = {countries} filter = {setNewFilter}/>
        </div>
  </div>
  );
}

export default App;
