import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({countries}) => {

    const [ weather, setWeather ] = useState('')

    console.log('works')
    

    useEffect(() => {
        console.log('effect')
        axios
          .get(`https://api.apixu.com/v1/current.json?key=b0f964c423d749bdbbd153159190102&q=${countries}`)
          .then(response => {
            console.log('promise fulfilled')
            setWeather(response.data)
          })
      }, [])
     
    if(weather === '') {
        return null
    }

    else {
        return (
            <div>
                <h2> Weather in {countries}</h2>
                <div>
                    Temperature: {weather.current.temp_c} C
                </div>
                <div>
                <img 
                src={weather.current.condition.icon}
                alt={weather.current.condition.text}/>
                </div>
                <div>
                Wind: {weather.current.wind_kph} kph direction {weather.current.wind_dir}
                </div>     
            </div>
          )
    }
  }

  export default Weather;