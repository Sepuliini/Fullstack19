import React from 'react'

const Header = ({ header }) => {
    console.log(header)
    return (
      <div>
        <h2>{header}</h2>
      </div>
    );
  }
  
  const Parts = ({ part, exercises }) => {
    return (
      <div>
        <p>{part} {exercises}</p>
      </div>
    )
  }
  
  const Content = ({ parts }) => {
    console.log(parts);
  
    const osat = () => parts.map(i =>
      <Parts key={i.id} part={i.name} exercises={i.exercises} />
    )
  
    const exercises = parts.map(j => j.exercises);
    console.log("e", exercises);
  
    const total = exercises.reduce((s, p) => {
      console.log("s", s)
      console.log("s+p", s + p)
      return s + p;
    })
  
    return (
      <div>
        {osat()}
        Total of {total} exercises!
      </div>
    );
  }
  
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header header={course.name} />
        <Content parts={course.parts} />
      </div>
    )
  }

  export default Course