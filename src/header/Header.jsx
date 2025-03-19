import React from 'react'
import './Header.css'
import logo from '../assets/images/logo-move.png'
import Button from '../components/Button'

const Header = () => {
  return (
    <header className='header-bg'>
          <img src={logo} alt="logo move"/>
          <div className='align'>
            <h1>Mudar-se nunca foi tão fácil antes.</h1>
          <h4>Ajuda você a planejar, reservar toda a sua mudança do conforto da sua casa.</h4>
          <Button className='buttonHeader' text="Faça um orçamento"/>
          </div>
    </header>
  )
}

export default Header
