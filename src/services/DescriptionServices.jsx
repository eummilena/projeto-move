import React from 'react'
import phone from '../assets/images/phone-call.svg'
import dollar from '../assets/images/dollar.svg'
import shield from '../assets/images/shield.svg'
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'
import './DescriptionServices.css'

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
    <div className="descriptionServices">
            {services.map((service, index) => (
                <article className='card' key={index}>
                    <img src={service.icon} />
                    <Subtitle className="subtitle" subtitle={service.title} />
                    <Text className="text" text={service.description} />
                </article>
            ))}
</div>
  )
   
}

export default DescriptionServices
