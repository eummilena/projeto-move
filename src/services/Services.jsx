import React from 'react'
import Text from '../components/Text'
import Subtitle from '../components/Subtitle'
import './Services.css'
import DescriptionServices from './DescriptionServices'

const Services = () => {
  return (
      <section>
          <Text className="textPrincipal" text="Nossos serviços" />
          <Subtitle subtitle="Serviços personalizados" />
          <DescriptionServices/>
          
      
    </section>
  )
}

export default Services
