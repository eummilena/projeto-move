import React from 'react'
import Subtitle4 from '../components/Subtitle4'
import styles from './Works.module.css'
import Text from '../components/Text'
import home from '../assets/images/Home.png'
import warehouse from '../assets/images/Warehouse.png'
import truck from '../assets/images/Truck.png'
import pontilhados from '../assets/images/pontilhado.png'
import Button from '../components/Button'


const Works = ({ setForm }) => {
  return (
    <section className={styles.work}>
      <Subtitle4 subtitle4='Como funciona?' className={styles.subtitle} />
      <Text text="A move simplifica todo o processo de movimentação" />
      <div className={styles.grid}>
        <div className={styles.box1}>
          <img src={home} alt="casa" className={styles.steps} />
          <Text className={styles.textBold} text="1. Insira seus detalhes de movimentaçao" />
          <Text text="Adicione os detalhes da mudança e obtenha o preço pela mudança imediatamente." />
        </div>
        <div className={styles.box2}>
          <img src={warehouse} alt="garagem" className={styles.steps} />
          <Text className={styles.textBold} text="2. Organize tudo em um só lugar" />
          <Text text="Vamos ajudá-lo a criar uma lista de coisas para mover. Vamos dominar isso juntos." />
        </div>
        <div className={styles.pontilhados}>
          <img src={pontilhados} alt="pontos indicadores" />
        </div>
        <div className={styles.box3}>
          <img src={truck} alt="caminhão" className={styles.steps} />
          <Text className={styles.textBold} text="3. Dia de mudança. Sem pressa." />
          <Text text="No grande dia, nossos carregadores chegam e fazem todo o trabalho duro." />
        </div>
        <div className={styles.box4}>
          <img src={truck} alt="caminhão" className={styles.steps} />
          <Text className={styles.textBold} text="4. Pague somente após a mudança." />
          <Text text="Pague somente após nossos funcionários concluírem toda mudança de seus pertences em sua nova." />
        </div>

      </div>
      <Button className={styles.button} onClick={() => setForm(true)}>Faça um orçamento online</Button>
    </section>
  )
}

export default Works
