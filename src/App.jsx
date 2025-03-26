import React from 'react'
import Header from './header/Header'
import Services from './services/Services'
import Works from './works/Works'
import './App.css'
import Move from './move/Move'


function App() {

  return (
    <div className='container'>
      <Header />
      <Services /> 
      <Works />
      <Move/>
    </div>
  )
}

export default App
