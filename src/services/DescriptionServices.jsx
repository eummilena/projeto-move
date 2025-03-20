import React from 'react'
import phone from '../assets/images/phone-call.svg'
import dollar from '../assets/images/dollar.svg'
import shield from '../assets/images/shield.svg'
import Subtitle4 from '../components/Subtitle4'
import Text from '../components/Text'
import styles from './DescriptionServices.module.css'

const services = [
    {
        icon: phone,
        title: 'Atendimento Personalizado',
        description: 'Reserva simples online. Economize tempe e aborrecimento sem visitas domiciliares.',
    },
     
        {
        icon: shield,
        title: 'Transporte com seguro premium',
        description: 'Oferecemos os melhores seguros do mercado. Cada um de nossos movimentos é coberto por um transporte premium abrangente.',
    },
         {
        icon: dollar,
        title: 'Totalmente transparente',
        description: 'Preços transparentes para todos os serviços Não precisa ser caro. Nós sabemos.',
    },
]
console.log(services);

const DescriptionServices = () => {
    return (
        <div className={styles.descriptionServices}>
            {services.map((service, index) => (
                <article className={styles.card} key={index}>
                    <img src={service.icon} />
                    <Subtitle4 className={styles.subtitle} subtitle4={service.title} />
                    <Text className={styles.text} text={service.description} />
                </article>
            ))}
</div>
  )
   
}

export default DescriptionServices
