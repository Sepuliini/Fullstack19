import React from 'react'
import ReactDOM from 'react-dom'

const Course = (props) => {  

    console.log(props.courses[0].name)

    const total1 = props.courses[0].parts.reduce( (s, p) => {
        console.log('what is happening',s, p)
        return (
            s + p.exercises
        )
      }, 0)


      const total2 = props.courses[1].parts.reduce( (x, y) => {
        console.log('what is happening',x, y)
        return (
            x + y.exercises
        )
      }, 0)

    return (
        <div>
         <h1> {props.courses[0].name} </h1>
         {props.courses[0].parts.map(courses => <p key = {courses.id} >{courses.name} {courses.exercises}</p>)}
         <h3>total of {total1} exercises</h3>
        
        <h1> {props.courses[1].name} </h1>
        {props.courses[1].parts.map(courses => <p key = {courses.id} >{courses.name} {courses.exercises}</p>)}
        <h3> total of {total2} exercises</h3>
    </div>
    )
            
}


const App = ( {course} ) => {
    const courses = [

        {
          name: 'Half Stack application development',
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 


        {
          name: 'Node.js',
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]
   
  

    return (
      <div>
        <Course courses={courses} />
      </div>
    )

  } 

  ReactDOM.render(<App />, document.getElementById('root'))