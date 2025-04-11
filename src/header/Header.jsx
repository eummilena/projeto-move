import React from 'react'
import styles from './Header.module.css'
import logo from '../assets/images/logo-move.png'
import Button from '../components/Button'
import Subtitle4 from '../components/Subtitle4'

const Header = ({ setForm }) => {
  return (
    <header className={styles.header}>

      <img src={logo} alt="logo move" />

      <h1 className={styles.title}>Mudar-se nunca foi tão fácil antes.</h1>
      <Subtitle4 className={styles.subtitle} subtitle4={'Ajuda você a planejar, reservar toda a sua mudança do conforto da sua casa.'} />
      <Button className={styles.buttonHeader} onClick={() => setForm(true)}>Faça um orçamento</Button>
    </header>
  )
}

export default Header
