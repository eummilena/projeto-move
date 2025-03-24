import React from 'react'
import Header from './header/Header'
import Services from './services/Services'
import Works from './works/Works'
import './App.css'


function App() {

  return (
    <div className='container'>
      <Header />
      <Services /> 
      <Works/>
    </div>
  )
}

export default App
