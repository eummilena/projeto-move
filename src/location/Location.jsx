import React from 'react'
import styles from './Location.module.css'
import gps from "../assets/images/gps.svg"

const Location = () => {
  return (
    <section className={styles.location}>
      <div className={styles.info}>
        <p> Move - Centro, n123</p>
        <span>(xx) x xxxx-xxxx</span>
        <span>(xx) x xxxx-xxxx</span>
      </div>
      <div className={styles.map}>
        <img src={gps} alt='ícone de localização' className={styles.icon} />
      </div>
    </section>
  )
}

export default Location
