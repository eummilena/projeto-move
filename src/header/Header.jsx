import React from 'react'
import styles from './Header.module.css'
import logo from '../assets/images/logo-move.png'
import Button from '../components/Button'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.align}>
          <img src={logo} alt="logo move"/>
      <h1 className={ styles.title}>Mudar-se nunca foi tão fácil antes.</h1>
      <h4 className={ styles.subtitle}>Ajuda você a planejar, reservar toda a sua mudança do conforto da sua casa.</h4>
        <Button className={styles.buttonHeader} text="Faça um orçamento"/>
         </div>
    </header>
  )
}

export default Header
