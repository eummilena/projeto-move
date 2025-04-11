import React from 'react'
import Header from './header/Header'
import Services from './services/Services'
import Works from './works/Works'
import './App.css'
import Move from './move/Move'
import Location from './location/Location'
import Form from './form/Form'


function App() {

  const [form, setForm] = React.useState(false);

  return (
    <div className='container'>
      <Header form={form} setForm={setForm} />
      <Services />
      <Works form={form} setForm={setForm} />
      <Move />
      <Location />
      {form && <Form setForm={setForm} />}

    </div>
  )
}

export default App
