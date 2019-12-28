import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'


import Persons from './Person'
import Filter from './Filter'


const Notification = ({ message, className }) => {
    const goodStyle = {
      color: 'green',
      background: 'lightgrey',
      border: 'solid',
      radius: '5px',
      margin: 20,
      padding: 10
    }
  
    const errorStyle = {
      color: 'red',
      background: 'lightgrey',
      border: 'solid',
      radius: '5px',
      margin: 20,
      padding: 10
    }
  
    if (message === null) {
      return null
    }
  
    if (!message.error) {
      return (
        <div style={goodStyle}>
          {message.text}
        </div>
      )
    }
  
    return (
      <div style={errorStyle}>
        {message.text}
      </div>
    )
  }


export default Notification

