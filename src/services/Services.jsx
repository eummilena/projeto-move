import React from 'react'
import Text from '../components/Text'
import Subtitle4 from '../components/Subtitle4'
import styles from './Services.module.css'
import DescriptionServices from './DescriptionServices'

const Services = () => {
  return (
      <section className={styles.section}>
      <Text className={styles.textPrincipal} text="Nossos serviços" />
      <Subtitle4 subtitle4="Serviços personalizados"/>
      <DescriptionServices/>

    </section>
  )
}

export default Services
