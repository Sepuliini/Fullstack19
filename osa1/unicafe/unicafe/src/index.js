import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props.header)
    return (
            <h1>
                {props.header}
            </h1>
    )
}


const Statistics = (props) => {
    const {good, bad, neutral} = props;
    const all = good + bad + neutral
    const average = (good + (-1 * bad)) / all
    const positive = good / all * 100

    console.log(average)
    console.log(positive)

if (all > 0) {
    return (
    <div>
        <h1>statistics</h1>
        <table>
            <tbody>
                <Statistic text="good" value ={good} />
                <Statistic text="neutral" value ={neutral} />
                <Statistic text="bad" value ={bad} />
                <Statistic text="all" value ={all} />
                <Statistic text="average" value ={average} />
                <Statistic text="positive" value ={positive + "%"} />
                </tbody>
            </table>
        </div>
        )
    }

    else {
        return (
            <div>
                <h1>statistics</h1>
                <p>no feedback given</p>
            </div>
        )
    }  
}

const Statistic = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Button = (props) => (<button onClick={props.handleClick}>    
      {props.text}
    </button>
  )


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
     <Header header = {'give feedback'}/>
     <Button handleClick={() => setGood(good + 1)} text = "good" />
     <Button handleClick={() => setNeutral(neutral + 1)} text = "neutral" />
     <Button handleClick={() => setBad(bad + 1)} text = "bad" />  
     <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
