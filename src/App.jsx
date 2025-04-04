import React from 'react'
import Header from './header/Header'
import Services from './services/Services'
import Works from './works/Works'
import './App.css'
import Move from './move/Move'
import Location from './location/Location'
import Form from './form/Form'


function App() {

  return (
    <div className='container'>
      <Header />
      <Services /> 
      <Works />
      <Move />
      <Location />
      <Form />
    </div>
  )
}

export default App
