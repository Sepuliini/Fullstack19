
import React from 'react'


const Header0 = (props) => {
    return (<h2>{props.courses[0].name}</h2>)
  }
  
  const Header1 = (props) => {
    return (<h2>{props.courses[1].name}</h2>)
  }
  
  const Total0 = (props) => {
    const total = props.courses.parts.reduce( (x, y) => {
      console.log('what is happening',x, y)
      return (
          x + y.exercises
      )
    }, 0)
    return (<p>Yhteensä {total} tehtävää</p>)
  }
  
  const Total1 = (props) => {
    const total = props.courses.parts.reduce( (x, y) => {
      console.log('what is happening',x, y)
      return (
          x + y.exercises
      )
    }, 0)
    return (<p>Yhteensä {total} tehtävää</p>)
  }
  
  const Parts0 = (props) => {
    return props.courses.parts.map(courses => <p key = {courses.id} >{courses.name} {courses.exercises}</p>)
  }
  
  const Parts1 = (props) => {
    return props.courses.parts.map(courses => <p key = {courses.id} >{courses.name} {courses.exercises}</p>)
  }
  
  const Course = (props) => {  
      return (
          <div>
           <h1>Web development curriculum</h1>
           <Header0 courses = {props.courses}/>      
           <Parts0 courses = {props.courses[0]} />
           <Total0 courses = {props.courses[0]} />       
           <Header1 courses = {props.courses}/> 
           <Parts1 courses = {props.courses[1]} />
          <Total0 courses = {props.courses[1]} />     
      </div>
      )           
  }

  export default Course
  